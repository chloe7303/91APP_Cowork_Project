import cartIcon from "../images/cart.png";
import likeIcon from "../images/like.png";
import Badge from "./Badge";

const StyledItem = ({
  imgSrc,
  badgeText,
  noBorderBottom,
  brand,
  name,
  price,
  discountPrice,
}: {
  imgSrc: string;
  badgeText: string | null;
  noBorderBottom: boolean;
  brand: string;
  name: string;
  price: number;
  discountPrice: number;
}) => {
  return (
    <div
      className={`flex justify-between py-5 ml-5 border-solid border-[#D8D9D8] ${
        !noBorderBottom && "border-b"
      }`}
    >
      <div className="relative w-[108px] mr-4">
        <img src={imgSrc} alt="skirt" className="w-full" />
        {badgeText && <Badge text={badgeText} />}
      </div>
      <div className="w-[190px]">
        <h5 className="text-[#999999]">{brand}</h5>
        <h4 className="mb-4 text-[14px]">{name}</h4>
        <small className="text-[#999999] line-through">{`NT$${price}`}</small>
        <div className="flex justify-between">
          <h4 className="text-primary">{`NT$${discountPrice}`}</h4>
          <div className="flex items-center">
            <img
              src={likeIcon}
              alt="cart"
              className="w-[20px] h-[20px] mr-[12px] cursor-pointer"
            />
            <img
              src={cartIcon}
              alt="like"
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledItem;
