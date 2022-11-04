import MainProduct from "./MainProduct";

export default function Main({
  personData,
  hintData,
  mainData,
  sliderData,
}: {
  personData: { img: string }[];
  hintData: { img: string }[];
  mainData: {
    imgSrc: string;
    badgeText: string | null;
    brand: string;
    name: string;
    price: number;
    discountPrice: number;
  }[];
  sliderData: {
    type: string;
    source: string;
  }[];
}) {
  return (
    <div>
      <div className="flex flex-col">
        <MainProduct styledItemList={mainData} sliderData={sliderData} />
        <div className="mb-[60px]">
          <span>此店員其他穿搭</span>
          <div className="flex max-w-[872px] justify-between mt-[14px]">
            {personData?.map((element, index) => {
              return (
                <img
                  key={`${element.img}_${index}`}
                  alt={element.img}
                  src={element.img}
                  className="w-[132px] cursor-pointer hover:opacity-50"
                />
              );
            })}
          </div>
        </div>
        <div>
          <span>其他穿搭推薦</span>
          <div className="flex max-w-[872px] justify-between mt-[14px]">
            {hintData?.map((element, index) => {
              return (
                <img
                  key={`${element.img}_${index}`}
                  alt={element.img}
                  src={element.img}
                  className="w-[132px] cursor-pointer hover:opacity-50"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
