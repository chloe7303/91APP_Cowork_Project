import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { activityInfoActions } from "../../../redux/reducers/activityInfoReducer";
import Button from "../sharedComponents/Button";
import Selector from "./Selector";
import { productsData } from "../../../datas/activity/data";
import ImageDisplay from "./ImageDisplay";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState({
    type: "iphone 13",
    model: "iphone 13 mini",
    color: "",
    memory: "",
    colorName: "",
    price: 0,
  });
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="bg-default md:pb-[150px] md:pt-[50px]">
      <h1 className="hidden md:block text-center text-[64px] mb-[40px]">
        選擇商品
      </h1>
      <div className="max-w-[1080px] bg-light rounded-md mx-auto md:py-[70px] md:pl-[80px] md:pr-[108px] md:shadow-md flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-[426px] mr-[20px]">
          <ImageDisplay
            data={
              productsData?.products[
                selectedProduct.model as keyof typeof productsData.products
              ].color
            }
            param={{
              backgroundColor: "#F2F2F2",
              backgroundWidth: 426,
              backgroundHeight: 426,
              displayColor: selectedProduct.color,
            }}
          />
        </div>
        <div className="pb-[80px] p-4 md:pb-0 md:w-[376px]">
          <h3 className="md:text-[20px] mb-5">Apple iphone 13</h3>
          <h2 className="text-[20px] md:text-[25px] text-primary">{`NT$${selectedProduct.price}`}</h2>
          <p className="text-primary text-[14px] md:text-[15px] mb-3 md:mb-5">
            登記的手機號碼需與會員手機號碼相同，每人限購一支一經送出商品選項，不得修改
          </p>
          <div className="mb-2 md:mb-4">
            <h5 className="text-[14px] mb-3 md:mb-5">選擇型號</h5>
            {productsData.allModels.map((modelName, index) => (
              <Selector
                key={index}
                text={modelName}
                colorCode={""}
                isActive={modelName === selectedProduct.model}
                isDisabled={false}
                handleClick={() =>
                  setSelectedProduct((prevValue) => ({
                    ...prevValue,
                    model: modelName,
                    color: "",
                    memory: "",
                    colorName: "",
                    price: 0,
                  }))
                }
              />
            ))}
          </div>
          <div className="mb-2 md:mb-4">
            <h5 className="text-[14px] mb-3 md:mb-5">選擇色彩</h5>
            {productsData?.products[
              selectedProduct.model as keyof typeof productsData.products
            ].color.map((color, index) => {
              return (
                <Selector
                  key={index}
                  text={color.name}
                  colorCode={color.hexCode}
                  isActive={selectedProduct.color === color.hexCode}
                  isDisabled={productsData?.products[
                    selectedProduct.model as keyof typeof productsData.products
                  ].variants
                    .filter((variant) => color.hexCode === variant.hexCode)
                    .every((variant) => variant.stock === 0)}
                  handleClick={() =>
                    setSelectedProduct((prevValue) => ({
                      ...prevValue,
                      color: color.hexCode,
                      colorName: color.name,
                    }))
                  }
                />
              );
            })}
          </div>
          <div className="mb-2 md:mb-4">
            <h5 className="text-[14px] mb-3 md:mb-5">選擇容量</h5>
            {productsData?.products[
              selectedProduct.model as keyof typeof productsData.products
            ].memory.map((memory, index) => {
              return (
                <Selector
                  key={index}
                  text={`${memory.size}`}
                  colorCode={""}
                  isActive={selectedProduct.memory === memory.size}
                  isDisabled={productsData?.products[
                    selectedProduct.model as keyof typeof productsData.products
                  ].variants
                    .filter((variant) => memory.size === variant.size)
                    .every((variant) => variant.stock === 0)}
                  handleClick={() =>
                    setSelectedProduct((prevValue) => ({
                      ...prevValue,
                      memory: memory.size,
                      price: memory.cost,
                    }))
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-4 py-2 md:py-4 fixed bottom-0 bg-light w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        <div className="text-primary flex justify-between max-w-[1080px] mx-auto mb-2 text-[14px] md:text-[20px]">
          <p>一經送出商品選項，不得修改</p>
          <p>{`NT$${selectedProduct.price}`}</p>
        </div>
        <Button
          text={"送出"}
          handleClick={() => {
            if (
              selectedProduct.model &&
              selectedProduct.memory &&
              selectedProduct.color
            ) {
              dispatch(
                activityInfoActions.setPhoneInfo({
                  phoneInfo: {
                    model: selectedProduct.model,
                    type: selectedProduct.type,
                    memory: selectedProduct.memory,
                    quantity: 1,
                    color: selectedProduct.colorName,
                    price: selectedProduct.price,
                  },
                })
              );
              localStorage.setItem(
                "phoneInfo",
                JSON.stringify({
                  model: selectedProduct.model,
                  type: selectedProduct.type,
                  memory: selectedProduct.memory,
                  quantity: 1,
                  color: selectedProduct.colorName,
                  price: selectedProduct.price,
                })
              );
              navigate("/activity/success");
            } else {
              setShowPopup(true);
            }
          }}
          param={{}}
        />
      </div>
      {/* popup */}
      <div
        className={`${
          !showPopup && "hidden"
        } fixed bg-black w-full top-0 bottom-0 opacity-50`}
      ></div>
      <div
        className={`${
          !showPopup && "hidden"
        } absolute p-4 rounded-md bg-light top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] opacity-100 text-center`}
      >
        <h3 className="md:text-[20px] font-medium mb-5">請選擇商品選項</h3>
        <h4 className="mb-4 whitespace-nowrap">
          送出資料錯誤，未選擇商品款式規格
        </h4>
        <Button
          text="確認"
          handleClick={() => setShowPopup(false)}
          param={{}}
        />
      </div>
    </main>
  );
};

export default ProductPage;
