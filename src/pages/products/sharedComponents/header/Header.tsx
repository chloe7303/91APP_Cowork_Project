import logo from "./logo.png";
import phoneIcon from "./phoneIcon.png";
import profileIcon from "./profileIcon.png";
import cartIcon from "./cartIcon.png";
import earthIcon from "./earthIcon.png";
import coinIcon from "./coinIcon.png";
import dropArrow from "./dropArrow.png";
import searchIcon from "./searchIcon.png";

const categoryList = [
  { name: "Category", arrow: true },
  { name: "Latest Promotions", arrow: true },
  { name: "Crayon Shinchan 15% off", arrow: false },
  { name: "Best Sellers", arrow: false },
  { name: "Our Videos", arrow: false },
  { name: "Crayon Shinchan 15% off", arrow: false },
  { name: "Best Sellers", arrow: false },
  { name: "Our videos", arrow: false },
];

export default function Header() {
  return (
    <div className="bg-[#C89185]">
      <div className="max-w-[1180px] mx-auto flex">
        <img
          alt="logo"
          src={logo}
          className="mr-[27px] h-[65px] mt-5 mb-[15px]"
        />

        <div className="flex flex-col">
          <div className="flex items-center h-[50px] justify-end">
            <img src={phoneIcon} className="mr-[10px]" />
            <img src={profileIcon} className="mr-[10px]" />
            <div className="flex mr-[24px]">
              <img src={cartIcon} className="mr-[5px]" />
              <span className="flex justify-center leading-[12px] text-[#FFFFFF] text-[12px] bg-[#FF5353] rounded-[100px] py-[2px] px-[9px]">
                10
              </span>
            </div>
            <div className="flex text-[12px] mr-[10px]">
              <img src={earthIcon} className="mr-[5px]" />
              <span className=" mr-[2px]">繁體中文</span>
              <div className="flex justify-center items-center">
                <img src={dropArrow} />
              </div>
            </div>

            <div className="flex text-[12px] mr-[10px]">
              <img src={coinIcon} className="mr-[5px]" />
              <span className=" mr-[2px]">TWD</span>
              <div className="flex justify-center items-center">
                <img src={dropArrow} />
              </div>
            </div>
          </div>
          <div className="flex mt-[17.5px]">
            <div className="flex max-w-[685px] flex-wrap mr-[36px]">
              {categoryList.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center text-[12px] mr-[20px] mb-4"
                  >
                    <span className=" mr-[3px]">{data.name}</span>
                    {data.arrow ? (
                      <div className="flex justify-center items-center">
                        <img src={dropArrow} />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-[214px] h-[26px] relative">
              <input
                placeholder="搜尋商品"
                className="w-full rounded-[100px] bg-[#F4F4F4] text-[12px] py-[4px] px-[10px]"
              />
              <img
                src={searchIcon}
                className="absolute right-[10.9px] top-[25%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
