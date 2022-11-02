import signIcon from "./images/sign.png";
import timeIcon from "./images/time.png";
import checkIcon from "./images/check.png";
import buyIcon from "./images/buy.png";
import arrorIcon from "./images/arrow.png";

const Process = () => {
	const processSteps = [
		"1. 填寫登記資料",
		"2. 等待審核驗證",
		"3. 確認驗證通過",
		"4. 開賣日購買購",
	];

	return (
		<div className="bg-light rounded-md py-2 md:py-4 px-3 md:px-6 text-[10px] font-medium mb-2">
			<p className="mb-2 md:mb-4 md:text-[16px]">活動流程：</p>
			<div className="flex justify-around items-center px-3 mb-2">
				<div className="w-[35px] md:w-[55px]">
					<img src={signIcon} alt="sign" />
				</div>
				<div className="w-[16px] md:w-[27px]">
					<img src={arrorIcon} alt="arror" />
				</div>
				<div className="w-[35px] md:w-[55px]">
					<img src={timeIcon} alt="time" />
				</div>
				<div className="w-[16px] md:w-[27px]">
					<img src={arrorIcon} alt="arror" />
				</div>
				<div className="w-[35px] md:w-[55px]">
					<img src={checkIcon} alt="check" />
				</div>
				<div className="w-[16px] md:w-[27px]">
					<img src={arrorIcon} alt="arror" />
				</div>
				<div className="w-[35px] md:w-[55px]">
					<img src={buyIcon} alt="buy" />
				</div>
			</div>
			<div className="flex justify-between text-center md:text-[14px]">
				{processSteps.map((step) => (
					<div
						key={step}
						className="scale-[0.8] origin-top-left whitespace-nowrap md:scale-100 "
					>
						{step}
					</div>
				))}
			</div>
		</div>
	);
};

export default Process;
