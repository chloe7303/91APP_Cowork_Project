import { useState, useEffect, useRef } from "react";
import slideRight from "../../../assets/activity/slideRight.png";
import slideLeft from "../../../assets/activity/slideLeft.png";

export default function Slide({
	data,
	param,
}: {
	data: string[];
	param: { width?: string; height?: string };
}) {
	const [slideData, setSlideData] = useState(data);
	const [currentIndex, setCurrentIndex] = useState(0);
	const interval = useRef<ReturnType<typeof setInterval>>();

	useEffect(() => {
		interval.current = setInterval(() => {
			if (currentIndex === slideData?.length - 1) setCurrentIndex(0);
			else setCurrentIndex((prev) => prev + 1);
		}, 5000);

		return () => clearInterval(interval.current);
	});

	function settingNewCurrentIndexRight() {
		if (currentIndex === slideData?.length - 1) setCurrentIndex(0);
		else setCurrentIndex((prev) => prev + 1);
	}

	function settingNewCurrentIndexLeft() {
		if (currentIndex === 0) setCurrentIndex(slideData?.length - 1);
		else setCurrentIndex((prev) => prev - 1);
	}

	return (
		<div
			style={{
				width: param?.width ? param?.width : "500px",
				height: param?.height ? param?.height : "500px",
			}}
			className="flex items-center justify-center"
		>
			<div
				className="relative inline-block"
				style={{
					backgroundImage: `url(${data[currentIndex]})`,
					backgroundSize: "contain",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<span className="absolute top-[-9px] text-center right-[6.41px] rounded-[2em] py-[1px] px-[8px] bg-[#333333] opacity-50 text-[12px] font-normal leading-[#17px] text-[#ffffff]">{`${
					currentIndex + 1
				}/${slideData?.length}`}</span>
				<img
					alt="leftArrow"
					src={slideLeft}
					className="absolute left-0 top-[50%]"
					onClick={settingNewCurrentIndexLeft}
				/>
				<img
					alt="rightArrow"
					src={slideRight}
					className="absolute right-0 top-[50%]"
					onClick={settingNewCurrentIndexRight}
				/>

				<img
					alt="phoneImage"
					src={data[currentIndex]}
					className="invisible"
				></img>
				<div className="flex justify-center">
					{slideData?.map((_, index) => {
						return (
							<span
								className={`${
									index === 0 ? "" : "ml-2"
								} rounded-[50%] h-[13px] w-[13px] border border-solid border-[#D2D2D2] ${
									index === currentIndex ? "bg-[#D9D9D9]" : "bg-[#ffffff]"
								}`}
								onClick={() => {
									setCurrentIndex(index);
								}}
							></span>
						);
					})}
				</div>
			</div>
		</div>
	);
}
