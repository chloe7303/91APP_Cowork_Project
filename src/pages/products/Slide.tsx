import mainImage1 from "./images/clothes_1.png";
import mainImage2 from "./images/clothes_2.png";
import mainImage3 from "./images/clothes_3.png";
import mainImage4 from "./images/clothes_4.png";
import mainImage5 from "./images/clothes_5.png";
import arrowLeft from "./images/arrow_left.png";
import arrowRight from "./images/arrow_right.png";

import { useState } from "react";
import VideoSlide from "./VideoSlide";
import clothesVideo from "../../assets/products/clothes_video.mp4";

const sliderDataArray = [
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
    type: "image",
    source: mainImage4,
  },
  {
    type: "image",
    source: mainImage5,
  },
];

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="w-[528px] h-[730px] relative mr-[18px]">
      {sliderDataArray.map((obj, index) => {
        return (
          <div
            key={index}
            className={`absolute ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {obj.type === "image" && <img src={obj.source} alt="clothes" />}
            {obj.type === "video" && <VideoSlide src={obj.source} />}
          </div>
        );
      })}
      <button
        onClick={() => setSlideIndex(slideIndex - 1)}
        className={`absolute top-[50%] left-[10px] ${
          slideIndex === 0 && "hidden"
        }`}
      >
        <img src={arrowLeft} alt="arrow" />
      </button>
      <button
        onClick={() => setSlideIndex(slideIndex + 1)}
        className={`absolute top-[50%] right-[10px] ${
          slideIndex === sliderDataArray.length - 1 && "hidden"
        }`}
      >
        <img src={arrowRight} alt="arrow" />
      </button>

      <div className="absolute bottom-0 flex left-[50%] -translate-x-[50%]">
        {sliderDataArray.map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={`w-[10px] h-[10px] rounded-full mr-[10px] cursor-pointer ${
              slideIndex === index ? "bg-[#4B4E5B]" : "bg-[#D8D9D8]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
