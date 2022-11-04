import StyledItem from "./sharedComponents/StyledItem";
import Slide from "./Slide";
import styleItem1 from "./images/styledItem_1.png";
import styleItem2 from "./images/styledItem_2.png";
import styleItem3 from "./images/styledItem_3.png";
import styleItem4 from "./images/styledItem_4.png";

const styledItemList = [
  {
    imgSrc: styleItem1,
    badgeText: "即將開賣",
  },
  {
    imgSrc: styleItem2,
    badgeText: "已售完",
  },
  {
    imgSrc: styleItem3,
    badgeText: null,
  },
  {
    imgSrc: styleItem4,
    badgeText: null,
  },
];

const MainProduct = () => {
  return (
    <div className="flex">
      <Slide />
      <div className="w-[335px]">
        <div className="mb-8">
          <h1 className="text-[23px] font-medium">
            柏高島屋ステーションモール店
          </h1>
          <h2>GLOBAL WORK</h2>
          <h3>152cm</h3>
        </div>
        <h2 className="mb-2">穿著單品</h2>
        {styledItemList.map((styleItem, index) => (
          <StyledItem
            key={index}
            imgSrc={styleItem.imgSrc}
            badgeText={styleItem.badgeText}
            noBorderBottom={index === styledItemList.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default MainProduct;
