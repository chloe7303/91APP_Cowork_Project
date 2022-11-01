import Process from "./Process";
import Rules from "../sharedComponents/Rules";
import Button from "../sharedComponents/Button";
import Slide from "./Slide";
import { productsData } from "../../../datas/activity/data";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-default pb-[65px] md:pb-[150px]">
      <div className="px-3 md:px-0 md:max-w-[1080px] mx-auto">
        <div className="py-7 md:pt-[145px] md:pb-[125px] flex justify-between flex-col-reverse md:flex-row">
          <div className="w-full md:w-[400px]">
            <Slide
              data={productsData.products["iphone 13"].mainImgs}
              param={{
                backgroundWidth: "400px",
                backgroundHeight: "400px",
                width: "350px",
                height: "350px",
              }}
            />
          </div>
          <div className="md:w-[52%]">
            <div className="text-center md:text-left mb-5">
              <h1 className="text-[24px] md:text-[48px] font-medium mb-2 md:mb-6">
                iPhone新機搶先登記
              </h1>
              <p className="text-[14px] md:text-[24px] md:mb-2">
                活動日期：即日起 - 9/23 (限量預約登記，額滿為止)
              </p>
              <p className="text-[14px] md:text-[24px] text-primary">
                <span>登記的手機號碼需與網購會員手機號碼相同，</span>
                <span className="hidden md:inline">每會員帳號限預約一支</span>
              </p>
              <p className="text-[14px] md:hidden text-primary">
                每會員帳號限預約一支
              </p>
            </div>
            <Process />
          </div>
        </div>
        <Rules />
      </div>
      <div className="p-4 fixed bottom-0 bg-light w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        <Button
          text={"搶先登記"}
          handleClick={() => navigate("/activity/submit")}
          param={{}}
        />
      </div>
    </main>
  );
};

export default LandingPage;
