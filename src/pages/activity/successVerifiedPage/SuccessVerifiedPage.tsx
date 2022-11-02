import Rules from "../sharedComponents/Rules";
import heartImg from "./heart.png";
import Button from "../sharedComponents/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessVerifiedPage = () => {
	const navigate = useNavigate();

	const info = useSelector((state: RootState) => state.activityInfo);
	useEffect(() => {
		if (!info?.userInfo?.accepted) {
			navigate("/activity/submit");
			return;
		}
		if (!info?.phoneInfo) {
			navigate("/activity/product");
			return;
		}
	}, []);

	return info?.userInfo?.accepted && info?.phoneInfo ? (
		<main className="bg-default">
			<div className="text-center pt-[30px] p-5 md:pt-[60px] bg-light border-b border-solid border-[#DDDDDD]">
				<h1 className="text-[24px] md:text-[64px] font-medium">
					恭喜您！驗證成功
				</h1>
				<img
					src={heartImg}
					alt="heart"
					className="mx-auto w-[200px] md:w-auto"
				/>
				<div className="md:text-[20px] text-[#333333]">
					<p>已完成 iphone 13 登記</p>
					<p className="mb-10">敬請等候開賣通知</p>
					<p className="text-primary font-medium md:mb-7">
						注意：簡訊驗證通過才算有登記，完成登記的手機號碼需與會員手機號碼相同，每人限購一支
					</p>
				</div>
			</div>
			<div className="max-w-[1080px] mx-auto pt-[30px] px-[15px] md:w-[850px] md:h-[713px]">
				<h2 className="font-bold text-[14px] md:text-[24px] font-medium pb-4 border-b border-solid border-[#D8D8D8] mb-7">
					登記資訊如下：
				</h2>
				<h2 className="text-[14px] md:text-[24px] font-medium mb-[10px] md:mb-[30px] flex justify-between ">
					<p className="font-bold">登記狀態</p>
					<p className="font-bold">驗證通過</p>
				</h2>
				<h2 className="font-bold text-[14px] md:text-[24px] font-medium flex justify-between mb-[10px] md:mb-[25px]">
					商品資訊
				</h2>
				<div className="mb-[34px] md:mb-[82px] ml-[12px] md:ml-[22px]">
					<div className="flex justify-between text-[14px] md:text-[24px] mt-2 md:mt-4">
						<p>商品</p>
						<p>{info.phoneInfo.type}</p>
					</div>
					<div className="flex justify-between text-[14px] md:text-[24px] mt-2 md:mt-4">
						<p>商品選項</p>
						<p>{`${info.phoneInfo.model}, ${info.phoneInfo.memory} ${info.phoneInfo.color}`}</p>
					</div>
					<div className="flex justify-between text-[14px] md:text-[24px] mt-2 md:mt-4">
						<p>商品數量</p>
						<p>1</p>
					</div>
					<div className="flex justify-between text-[14px] md:text-[24px] mt-2 md:mt-4">
						<p>單價</p>
						<p className="text-[#FF5353]">{`NT$${info.phoneInfo.price}`}</p>
					</div>
				</div>
				<h2 className="font-bold text-[14px] md:text-[24px] font-medium mb-[10px] md:mb-[25px] flex justify-between">
					個人資訊
				</h2>
				<div className="mb-[34px] md:mb-[82px] ml-[12px] md:ml-[22px]">
					<div className="flex justify-between text-[14px] md:text-[24px] mt-2 md:mt-4">
						<p>姓名</p>
						<p>{info.userInfo.fullName}</p>
					</div>
					<div className="flex justify-between text-[14px] md:text-[24px] mt-2 md:mt-4">
						<p>手機號碼</p>
						<p>{`${info.userInfo.areaCode} ${info.userInfo.phoneNumber}`}</p>
					</div>
					<div className="flex justify-between text-[14px] md:text-[24px] mt-2 md:mt-4">
						<p>Email</p>
						<p className="">{info.userInfo.email}</p>
					</div>
				</div>
			</div>
			<div className="max-w-[1080px] md:mt-[30px] mx-auto pb-[190px]">
				<Rules />
			</div>
			<div className="p-4 pt-2 fixed bottom-0 bg-light w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
				<p className="text-primary text-[14px] md:text-[15px] mb-3 text-center">
					立刻加入會員，開賣通知不漏接！
				</p>
				<Button
					text={"加入會員"}
					handleClick={() => {}}
					param={{ formName: "userInfoForm" }}
				/>
			</div>
		</main>
	) : (
		<></>
	);
};

export default SuccessVerifiedPage;
