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
	products: {
		iphone13: {
			type: "iphone 13",
			mainImgs: [
				phoneAll2,
				phoneAll1,
				phoneRed,
				phonePink,
				phoneDarkBlue,
				phoneBlack,
				phoneWhite,
			],
			color: [
				{ name: "紅色", hexCode: "C72232", img: phoneRed },
				{ name: "粉紅色", hexCode: "FAE1DC", img: phonePink },
				{ name: "藍色", hexCode: "447792", img: phoneDarkBlue },
				{ name: "午夜色", hexCode: "43484E", img: phoneBlack },
				{ name: "星光色", hexCode: "FBF7F4", img: phoneWhite },
			],
			memory: [
				{ size: 128, cost: 25900 },
				{ size: 256, cost: 29400 },
				{ size: 512, cost: 36400 },
			],
			variants: [
				{ id: "C72232_128", hexCode: "C72232", size: 128, stock: 1 },
				{ id: "C72232_256", hexCode: "C72232", size: 256, stock: 2 },
				{ id: "C72232_512", hexCode: "C72232", size: 512, stock: 2 },
				{ id: "FAE1DC_128", hexCode: "FAE1DC", size: 128, stock: 3 },
				{ id: "FAE1DC_256", hexCode: "FAE1DC", size: 256, stock: 2 },
				{ id: "FAE1DC_512", hexCode: "FAE1DC", size: 512, stock: 0 },
				{ id: "447792_128", hexCode: "447792", size: 128, stock: 2 },
				{ id: "447792_256", hexCode: "447792", size: 256, stock: 5 },
				{ id: "447792_512", hexCode: "447792", size: 512, stock: 2 },
				{ id: "43484E_128", hexCode: "43484E", size: 128, stock: 1 },
				{ id: "43484E_256", hexCode: "43484E", size: 256, stock: 2 },
				{ id: "43484E_512", hexCode: "43484E", size: 512, stock: 2 },
				{ id: "FBF7F4_128", hexCode: "FBF7F4", size: 128, stock: 3 },
				{ id: "FBF7F4_256", hexCode: "FBF7F4", size: 256, stock: 2 },
				{ id: "FBF7F4_512", hexCode: "FBF7F4", size: 512, stock: 0 },
			],
		},
	},
};
