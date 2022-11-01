import { useState } from "react";
import vectorRight from "../../../assets/activity/vectorRight.png";
import vectorLeft from "../../../assets/activity/vectorLeft.png";

export default function ImageDisplay({
	data,
	param,
}: {
	data: { name: string; hexCode: string; img: string }[];
	param: {
		displayColor?: string;
		backgroundWidth?: number;
		backgroundHeight?: number;
		backgroundColor?: string;
	};
}) {
	const [currentColor, setCurrentColor] = useState<string>(
		param?.displayColor || data?.[0].name || ""
	);
	const [showArrayIndex, setShowArrayIndex] = useState<number>(0);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	// the required distance between touchStart and touchEnd to be detected as a swipe
	const minSwipeDistance = 50;

	const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
		setTouchStart(e.targetTouches[0].clientX);
	};

	const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
		setTouchEnd(e.targetTouches[0].clientX);

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > minSwipeDistance;
		const isRightSwipe = distance < -minSwipeDistance;
		// if (isLeftSwipe || isRightSwipe)
		// 	console.log("swipe", isLeftSwipe ? "left" : "right");
		// add your conditional logic here
		if (isLeftSwipe) {
			if (showArrayIndex === data.length / 5) {
				return;
			} else {
				setShowArrayIndex((prev) => prev + 1);
			}
		}
		if (isRightSwipe) {
			if (showArrayIndex === 0) {
				return;
			} else {
				setShowArrayIndex((prev) => prev - 1);
			}
		}
	};

	return (
		<div className="ml-[50px]">
			<div
				style={{
					width: param?.backgroundWidth
						? `${param?.backgroundWidth}px`
						: "500px",
					height: param?.backgroundHeight
						? `${param?.backgroundHeight}px`
						: "500px",
					backgroundColor: param?.backgroundColor
						? param?.backgroundColor
						: "transparent",
				}}
				className="flex items-center justify-center"
			>
				{data
					?.filter((element) => element.name === currentColor)
					.map((element) => {
						return <img alt="phone" src={element.img} />;
					})}
			</div>
			<div
				style={{
					width: param?.backgroundWidth
						? `${param?.backgroundWidth}px`
						: "500px",
				}}
				className="hidden relative justify-start mt-[12px] md:flex"
			>
				<button
					disabled={showArrayIndex === 0 ? true : false}
					className={`absolute left-[-31px] top-[43px] flex justify-center items-center w-[30px] h-[30px] ${
						showArrayIndex === 0 ? "cursor-not-allowed" : ""
					}`}
					onClick={() => {
						setShowArrayIndex((prev) => prev - 1);
					}}
				>
					<img className="" src={vectorLeft} />
				</button>
				<div
					className="flex"
					onTouchStart={(e) => onTouchStart(e)}
					onTouchMove={(e) => onTouchMove(e)}
					onTouchEnd={onTouchEnd}
				>
					{data
						?.filter((_, index) => Math.floor(index / 5) === showArrayIndex)
						?.map((element, index) => {
							return (
								<img
									alt="phone"
									src={element.img}
									style={{
										width: param?.backgroundWidth
											? `${Math.floor(param?.backgroundWidth / 5)}px`
											: "97px",
										backgroundColor: param?.backgroundColor
											? param?.backgroundColor
											: "transparent",
									}}
									className={`${(index + 1) % 5 === 0 ? "" : "mr-[3.6px]"}`}
									onClick={() => setCurrentColor(element.name)}
								/>
							);
						})}
				</div>
				<button
					disabled={
						showArrayIndex === Math.floor(data.length / 6) ? true : false
					}
					className={`absolute right-[-31px] top-[43px] flex justify-center items-center w-[30px] h-[30px] ${
						showArrayIndex === Math.floor(data.length / 6)
							? "cursor-not-allowed"
							: ""
					}`}
					onClick={() => {
						setShowArrayIndex((prev) => prev + 1);
					}}
				>
					<img className="" src={vectorRight} />
				</button>
			</div>
		</div>
	);
}
