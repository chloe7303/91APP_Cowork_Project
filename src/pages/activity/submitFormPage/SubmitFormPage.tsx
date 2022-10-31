import { useNavigate } from "react-router-dom";
import Button from "../sharedComponents/Button";

const SubmitFormPage = () => {
  const navigate = useNavigate();

  const handleSubmitForm = () => {
    navigate("/activity/product");
  };

  return (
    <main className="bg-default pb-[65px] md:pb-[150px] pt-[30px] md:pt-[60px]">
      <div className="hidden md:block text-center mb-[60px]">
        <h1 className="text-[64px] mb-[66px]">iPhone新機搶先登記</h1>
        <p className="text-[24px] mb-2">
          活動日期：即日起 - 9/23 (限量預約登記，額滿為止)
        </p>
        <p className="text-[14px] md:text-[24px] text-primary">
          登記的手機號碼需與會員手機號碼相同，每人限購一支
        </p>
      </div>
      <div className="md:hidden text-center mb-5">
        <h1 className="text-[24px] font-medium mb-2">
          立即登記！搶先擁有 iPhone 13
        </h1>
        <p className="text-[14px]">
          預約時間：2021/9/17 13:00:00 ~ 2021/9/20 12:59:59
        </p>
        <p className="text-[14px] text-primary mb-2">
          登記的手機號碼需與會員手機號碼相同，每人限購一支
        </p>
        <p className="text-[14px] text-[#428BCA]">加碼贈品與活動說明 &#62;</p>
      </div>
      <div className="max-w-[1080px] bg-light mx-auto py-[60px] text-center md:shadow-md">
        this is form
      </div>
      <div className="p-4 fixed bottom-0 bg-light w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        <Button text={"選擇商品"} handleClick={handleSubmitForm} />
      </div>
    </main>
  );
};

export default SubmitFormPage;
