import signIcon from './images/sign.png';
import timeIcon from './images/time.png';
import checkIcon from './images/check.png';
import buyIcon from './images/buy.png';
import arrorIcon from './images/arrow.png';

const Process = () => {
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
      <div className="flex justify-between text-center text-[10px] md:text-[14px]">
        <div className="w-[80px] md:w-[115px]">1. 填寫登記資料</div>
        <div className="w-[80px] md:w-[115px]">2. 等待審核驗證</div>
        <div className="w-[80px] md:w-[115px]">3. 確認驗證通過</div>
        <div className="w-[80px] md:w-[115px]">4. 開賣日購買</div>
      </div>
    </div>
  );
};

export default Process;
