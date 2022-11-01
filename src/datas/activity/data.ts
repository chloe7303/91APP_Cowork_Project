import phoneBlack from "../../assets/activity/phone_black.png";
import phoneDarkBlue from "../../assets/activity/phone_darkBlue.png";
import phoneGold from "../../assets/activity/phone_gold.png";
import phoneGray from "../../assets/activity/phone_gray.png";
import phoneLightBlue from "../../assets/activity/phone_lightBlue.png";
import phonePink from "../../assets/activity/phone_pink.png";
import phoneRed from "../../assets/activity/phone_red.png";
import phoneSilver from "../../assets/activity/phone_silver.png";
import phoneWhite from "../../assets/activity/phone_white.png";
import phoneAll1 from "../../assets/activity/phone_all_1.png";
import phoneAll2 from "../../assets/activity/phone_all_2.png";

export const productsData = {
  mainImgs: [
    phoneAll2,
    phoneAll1,
    phoneRed,
    phonePink,
    phoneDarkBlue,
    phoneBlack,
    phoneWhite,
    phoneSilver,
    phoneLightBlue,
    phoneGold,
    phoneGray,
  ],
  allModels: [
    "iphone 13 mini",
    "iphone 13",
    "iphone 13 Pro",
    "iphone 13 Pro Max",
  ],
  products: {
    "iphone 13": {
      type: "iphone 13",
      color: [
        { name: "紅色", hexCode: "C72232", img: phoneRed },
        { name: "粉紅色", hexCode: "FAE1DC", img: phonePink },
        { name: "藍色", hexCode: "447792", img: phoneDarkBlue },
        { name: "午夜色", hexCode: "43484E", img: phoneBlack },
        { name: "星光色", hexCode: "FBF7F4", img: phoneWhite },
      ],
      memory: [
        { size: "128GB", cost: 25900 },
        { size: "256GB", cost: 29400 },
        { size: "512GB", cost: 36400 },
      ],
      variants: [
        { id: "C72232_128", hexCode: "C72232", size: "128GB", stock: 1 },
        { id: "C72232_256", hexCode: "C72232", size: "256GB", stock: 2 },
        { id: "C72232_512", hexCode: "C72232", size: "512GB", stock: 2 },
        { id: "FAE1DC_128", hexCode: "FAE1DC", size: "128GB", stock: 3 },
        { id: "FAE1DC_256", hexCode: "FAE1DC", size: "256GB", stock: 2 },
        { id: "FAE1DC_512", hexCode: "FAE1DC", size: "512GB", stock: 0 },
        { id: "447792_128", hexCode: "447792", size: "128GB", stock: 2 },
        { id: "447792_256", hexCode: "447792", size: "256GB", stock: 5 },
        { id: "447792_512", hexCode: "447792", size: "512GB", stock: 2 },
        { id: "43484E_128", hexCode: "43484E", size: "128GB", stock: 1 },
        { id: "43484E_256", hexCode: "43484E", size: "256GB", stock: 2 },
        { id: "43484E_512", hexCode: "43484E", size: "512GB", stock: 2 },
        { id: "FBF7F4_128", hexCode: "FBF7F4", size: "128GB", stock: 3 },
        { id: "FBF7F4_256", hexCode: "FBF7F4", size: "256GB", stock: 2 },
        { id: "FBF7F4_512", hexCode: "FBF7F4", size: "512GB", stock: 0 },
      ],
    },
    "iphone 13 mini": {
      type: "iphone 13",
      color: [
        { name: "紅色", hexCode: "C72232", img: phoneRed },
        { name: "粉紅色", hexCode: "FAE1DC", img: phonePink },
        { name: "藍色", hexCode: "447792", img: phoneDarkBlue },
        { name: "午夜色", hexCode: "43484E", img: phoneBlack },
        { name: "星光色", hexCode: "FBF7F4", img: phoneWhite },
      ],
      memory: [
        { size: "128GB", cost: 22900 },
        { size: "256GB", cost: 26400 },
        { size: "512GB", cost: 33400 },
      ],
      variants: [
        { id: "C72232_128", hexCode: "C72232", size: "128GB", stock: 0 },
        { id: "C72232_256", hexCode: "C72232", size: "256GB", stock: 0 },
        { id: "C72232_512", hexCode: "C72232", size: "512GB", stock: 0 },
        { id: "FAE1DC_128", hexCode: "FAE1DC", size: "128GB", stock: 3 },
        { id: "FAE1DC_256", hexCode: "FAE1DC", size: "256GB", stock: 0 },
        { id: "FAE1DC_512", hexCode: "FAE1DC", size: "512GB", stock: 5 },
        { id: "447792_128", hexCode: "447792", size: "128GB", stock: 2 },
        { id: "447792_256", hexCode: "447792", size: "256GB", stock: 3 },
        { id: "447792_512", hexCode: "447792", size: "512GB", stock: 2 },
        { id: "43484E_128", hexCode: "43484E", size: "128GB", stock: 1 },
        { id: "43484E_256", hexCode: "43484E", size: "256GB", stock: 0 },
        { id: "43484E_512", hexCode: "43484E", size: "512GB", stock: 4 },
        { id: "FBF7F4_128", hexCode: "FBF7F4", size: "128GB", stock: 3 },
        { id: "FBF7F4_256", hexCode: "FBF7F4", size: "256GB", stock: 2 },
        { id: "FBF7F4_512", hexCode: "FBF7F4", size: "512GB", stock: 0 },
      ],
    },
    "iphone 13 Pro": {
      type: "iphone 13",
      color: [
        { name: "天峰藍色", hexCode: "A9C1D9", img: phoneLightBlue },
        { name: "銀色", hexCode: "F1F2ED", img: phoneSilver },
        { name: "金色", hexCode: "F9E7CF", img: phoneGold },
        { name: "石墨色", hexCode: "5A5955", img: phoneGray },
      ],
      memory: [
        { size: "128GB", cost: 32900 },
        { size: "256GB", cost: 36400 },
        { size: "512GB", cost: 43400 },
        { size: "1TB", cost: 50400 },
      ],
      variants: [
        { id: "A9C1D9_128", hexCode: "A9C1D9", size: "128GB", stock: 0 },
        { id: "A9C1D9_256", hexCode: "A9C1D9", size: "256GB", stock: 2 },
        { id: "A9C1D9_512", hexCode: "A9C1D9", size: "512GB", stock: 3 },
        { id: "A9C1D9_1000", hexCode: "A9C1D9", size: "1TB", stock: 2 },
        { id: "F1F2ED_128", hexCode: "F1F2ED", size: "128GB", stock: 1 },
        { id: "F1F2ED_256", hexCode: "F1F2ED", size: "256GB", stock: 4 },
        { id: "F1F2ED_512", hexCode: "F1F2ED", size: "512GB", stock: 0 },
        { id: "F1F2ED_1000", hexCode: "F1F2ED", size: "1TB", stock: 3 },
        { id: "F9E7CF_128", hexCode: "F9E7CF", size: "128GB", stock: 3 },
        { id: "F9E7CF_256", hexCode: "F9E7CF", size: "256GB", stock: 1 },
        { id: "F9E7CF_512", hexCode: "F9E7CF", size: "512GB", stock: 0 },
        { id: "F9E7CF_1000", hexCode: "F9E7CF", size: "1TB", stock: 3 },
        { id: "5A5955_128", hexCode: "5A5955", size: "128GB", stock: 3 },
        { id: "5A5955_256", hexCode: "5A5955", size: "256GB", stock: 0 },
        { id: "5A5955_512", hexCode: "5A5955", size: "512GB", stock: 2 },
        { id: "5A5955_1000", hexCode: "5A5955", size: "1TB", stock: 4 },
      ],
    },
    "iphone 13 Pro Max": {
      type: "iphone 13",
      color: [
        { name: "天峰藍色", hexCode: "A9C1D9", img: phoneLightBlue },
        { name: "銀色", hexCode: "F1F2ED", img: phoneSilver },
        { name: "金色", hexCode: "F9E7CF", img: phoneGold },
        { name: "石墨色", hexCode: "5A5955", img: phoneGray },
      ],
      memory: [
        { size: "128GB", cost: 36900 },
        { size: "256GB", cost: 40400 },
        { size: "512GB", cost: 47400 },
        { size: "1TB", cost: 54400 },
      ],
      variants: [
        { id: "A9C1D9_128", hexCode: "A9C1D9", size: "128GB", stock: 0 },
        { id: "A9C1D9_256", hexCode: "A9C1D9", size: "256GB", stock: 2 },
        { id: "A9C1D9_512", hexCode: "A9C1D9", size: "512GB", stock: 2 },
        { id: "A9C1D9_1000", hexCode: "A9C1D9", size: "1TB", stock: 3 },
        { id: "F1F2ED_128", hexCode: "F1F2ED", size: "128GB", stock: 4 },
        { id: "F1F2ED_256", hexCode: "F1F2ED", size: "256GB", stock: 0 },
        { id: "F1F2ED_512", hexCode: "F1F2ED", size: "512GB", stock: 1 },
        { id: "F1F2ED_1000", hexCode: "F1F2ED", size: "1TB", stock: 3 },
        { id: "F9E7CF_128", hexCode: "F9E7CF", size: "128GB", stock: 2 },
        { id: "F9E7CF_256", hexCode: "F9E7CF", size: "256GB", stock: 0 },
        { id: "F9E7CF_512", hexCode: "F9E7CF", size: "512GB", stock: 5 },
        { id: "F9E7CF_1000", hexCode: "F9E7CF", size: "1TB", stock: 4 },
        { id: "5A5955_128", hexCode: "5A5955", size: "128GB", stock: 0 },
        { id: "5A5955_256", hexCode: "5A5955", size: "256GB", stock: 2 },
        { id: "5A5955_512", hexCode: "5A5955", size: "512GB", stock: 2 },
        { id: "5A5955_1000", hexCode: "5A5955", size: "1TB", stock: 1 },
      ],
    },
  },
};
