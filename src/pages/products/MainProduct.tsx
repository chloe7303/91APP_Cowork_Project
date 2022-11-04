import StyledItem from "./sharedComponents/StyledItem";
import Slide from "./Slide";

// const styledItemList = [
//   {
//     imgSrc: styleItem1,
//     badgeText: "即將開賣",
//     brand: "niko and ...",
//     name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
//     price: 500,
//     discountPrice: 200,
//   },
//   {
//     imgSrc: styleItem2,
//     badgeText: "已售完",
//     brand: "niko and ...",
//     name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
//     price: 500,
//     discountPrice: 200,
//   },
//   {
//     imgSrc: styleItem3,
//     badgeText: null,
//     brand: "niko and ...",
//     name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
//     price: 500,
//     discountPrice: 200,
//   },
//   {
//     imgSrc: styleItem4,
//     badgeText: null,
//     brand: "niko and ...",
//     name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
//     price: 500,
//     discountPrice: 200,
//   },
// ];

const MainProduct = ({
  styledItemList,
  sliderData,
}: {
  styledItemList: {
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
}) => {
  return (
    <div className="flex">
      <Slide sliderDataArray={sliderData} />
      <div className="w-[335px]">
        <div className="mb-8">
          <h1 className="text-[23px] font-medium">
            柏高島屋ステーションモール店
          </h1>
          <h2>GLOBAL WORK</h2>
          <h3>152cm</h3>
        </div>
        <h2 className="mb-2">穿著單品</h2>
        {styledItemList?.map((styleItem, index) => (
          <StyledItem
            key={index}
            imgSrc={styleItem.imgSrc}
            badgeText={styleItem.badgeText}
            noBorderBottom={index === styledItemList.length - 1}
            brand={styleItem.brand}
            name={styleItem.name}
            price={styleItem.price}
            discountPrice={styleItem.discountPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default MainProduct;
