import { useState, useEffect, useRef } from "react";
import vectorRight from "../../../assets/activity/vectorRight.png";
import vectorLeft from "../../../assets/activity/vectorLeft.png";

export default function ImageDisplay({
  data,
  param,
}: {
  data: { name: string; hexCode: string; img: string }[];
  param: {
    displayColor?: string;
    backgroundWidth?: number;
    backgroundHeight?: number;
    backgroundColor?: string;
  };
}) {
  const [currentColor, setCurrentColor] = useState<string>(
    data?.[0].hexCode || ""
  );
  const [showArrayIndex, setShowArrayIndex] = useState<number>(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEnd.current = 0;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    (touchEnd.current = e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      if (showArrayIndex === Math.ceil(data.length / 5) - 1) {
        return;
      } else {
        setShowArrayIndex((prev) => prev + 1);
      }
    }
    if (isRightSwipe) {
      if (showArrayIndex === 0) {
        return;
      } else {
        setShowArrayIndex((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    if (param?.displayColor) setCurrentColor(param?.displayColor!);
  }, [param?.displayColor]);

  useEffect(() => {
    if (data) setCurrentColor(data[0].hexCode);
  }, [data]);

  return (
    <div>
      <div
        style={{
          width: param?.backgroundWidth
            ? `${param?.backgroundWidth}px`
            : "500px",
          height: param?.backgroundHeight
            ? `${param?.backgroundHeight}px`
            : "500px",
          backgroundColor: param?.backgroundColor
            ? param?.backgroundColor
            : "transparent",
        }}
        className="flex items-center justify-center !w-full"
      >
        {data
          ?.filter((element) => element.hexCode === currentColor)
          .map((element) => {
            return <img key={element.name} alt="phone" src={element.img} />;
          })}
      </div>
      <div
        style={{
          width: param?.backgroundWidth
            ? `${param?.backgroundWidth}px`
            : "500px",
        }}
        className="hidden relative justify-start mt-[12px] md:flex"
      >
        <button
          disabled={showArrayIndex === 0 ? true : false}
          style={{
            top: `${
              param?.backgroundWidth
                ? `${Math.floor((param?.backgroundWidth / 500) * 43)}px`
                : "43px"
            } `,
          }}
          className={`absolute left-[-31px] flex justify-center items-center w-[30px] h-[30px] ${
            showArrayIndex === 0 ? "cursor-not-allowed" : ""
          }`}
          onClick={() => {
            setShowArrayIndex((prev) => prev - 1);
          }}
        >
          <img src={vectorLeft} alt="vectorLeft" />
        </button>
        <div
          className="flex"
          onTouchStart={(e) => onTouchStart(e)}
          onTouchMove={(e) => onTouchMove(e)}
          onTouchEnd={onTouchEnd}
        >
          {data
            ?.filter((_, index) => Math.floor(index / 5) === showArrayIndex)
            ?.map((element, index) => {
              return (
                <img
                  key={element.name}
                  alt="phone"
                  src={element.img}
                  style={{
                    width: param?.backgroundWidth
                      ? `${Math.floor((param?.backgroundWidth - 14.4) / 5)}px`
                      : "97px",
                    backgroundColor: param?.backgroundColor
                      ? param?.backgroundColor
                      : "transparent",
                  }}
                  className={`${(index + 1) % 5 === 0 ? "" : "mr-[3.6px]"}`}
                  onClick={() => setCurrentColor(element.hexCode)}
                />
              );
            })}
        </div>
        <button
          disabled={
            showArrayIndex === Math.floor(data.length / 6) ? true : false
          }
          style={{
            top: `${
              param?.backgroundWidth
                ? `${Math.floor((param?.backgroundWidth / 500) * 43)}px`
                : "43px"
            } `,
          }}
          className={`absolute right-[-31px] flex justify-center items-center w-[30px] h-[30px] ${
            showArrayIndex === Math.floor(data.length / 6)
              ? "cursor-not-allowed"
              : ""
          }`}
          onClick={() => {
            setShowArrayIndex((prev) => prev + 1);
          }}
        >
          <img src={vectorRight} alt="vectorRight" />
        </button>
      </div>
    </div>
  );
}
