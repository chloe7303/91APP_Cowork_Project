import shirt1 from "../../assets/products/shirt1.png";
import shirt2 from "../../assets/products/shirt2.png";
import shirt3 from "../../assets/products/shirt3.png";
import shirt4 from "../../assets/products/shirt4.png";
import shirt5 from "../../assets/products/shirt5.png";
import shirt6 from "../../assets/products/shirt6.png";
import styleItem1 from "../../assets/products/styledItem1.png";
import styleItem2 from "../../assets/products/styledItem2.png";
import styleItem3 from "../../assets/products/styledItem3.png";
import styleItem4 from "../../assets/products/styledItem4.png";
import mainImage1 from "../../assets/products/clothes1.png";
import mainImage2 from "../../assets/products/clothes2.png";
import mainImage3 from "../../assets/products/clothes3.png";
import mainImage4 from "../../assets/products/clothes4.png";
import mainImage5 from "../../assets/products/clothes5.png";
import clothesVideo from "../../assets/products/staff.mov";
import clothesVideo2 from "../../assets/products/clothes.mp4";

export const data = {
  id: "",
  slideSrc: [
    {
      type: "video",
      source: clothesVideo,
    },
    {
      type: "image",
      source: mainImage1,
    },
    {
      type: "image",
      source: mainImage2,
    },
    {
      type: "image",
      source: mainImage3,
    },
    {
      type: "video",
      source: clothesVideo2,
    },
    {
      type: "image",
      source: mainImage4,
    },
    {
      type: "image",
      source: mainImage5,
    },
  ],
  styledItems: [
    {
      imgSrc: styleItem1,
      badgeText: "即將開賣",
      brand: "niko and ...",
      name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
      price: 500,
      discountPrice: 200,
    },
    {
      imgSrc: styleItem2,
      badgeText: "已售完",
      brand: "niko and ...",
      name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
      price: 500,
      discountPrice: 200,
    },
    {
      imgSrc: styleItem3,
      badgeText: null,
      brand: "niko and ...",
      name: "LOWRYS FARM【官網獨售】可愛素色印字燈芯絨側背包-兩色",
      price: 500,
      discountPrice: 200,
    },
    {
      imgSrc: styleItem4,
      badgeText: null,
      brand: "niko and ...",
      name: "LOWRYS FARM【官網獨售】質感多功能金屬拉鍊後背包-三色",
      price: 500,
      discountPrice: 200,
    },
  ],
  styleHint: [
    { img: shirt1 },
    { img: shirt2 },
    { img: shirt3 },
    { img: shirt4 },
    { img: shirt5 },
    { img: shirt6 },
  ],
};
