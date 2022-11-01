import Rules from "../sharedComponents/Rules";
import heartImg from "./heart.png";
import Button from "../sharedComponents/Button";

const SuccessVerifiedPage = () => {
  return (
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
      <div className="max-w-[1080px] mx-auto pt-[30px] px-[115px]">
        <h2 className="text-[24px] font-medium pb-4 border-b border-solid border-[#D8D8D8] mb-7">
          登記資訊如下：
        </h2>
        <h2 className="text-[24px] font-medium pb-4 mb-7 flex justify-between">
          <p>商品資訊</p>
          <p>驗證通過</p>
        </h2>
        <h2 className="text-[24px] font-medium pb-4 mb-7 flex justify-between">
          商品資訊
        </h2>
        <h2 className="text-[24px] font-medium pb-4 mb-7 flex justify-between">
          個人資訊
        </h2>
      </div>
      <div className="max-w-[1080px] mx-auto pb-[190px]">
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
  );
};

export default SuccessVerifiedPage;
