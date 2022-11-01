const Selector = ({
  text,
  colorCode,
  isActive,
  isDisabled,
  handleClick,
}: {
  text: string;
  colorCode: string;
  isActive: boolean;
  isDisabled: boolean;
  handleClick: Function;
}) => {
  return (
    <button
      className={`border border-solid border-[#D4D9DE rounded py-1 ${
        colorCode ? "px-3" : "px-4"
      } text-[14px] mr-[10px] mb-[10px] ${
        isActive && "bg-primary text-light"
      } ${isDisabled && "bg-[#f6f6f6] text-[#999999]"}`}
      onClick={() => handleClick()}
    >
      <span>{text}</span>
      {colorCode && (
        <span
          className={`inline-block w-[12px] h-[12px] rounded-full ml-1 ${
            isDisabled && "opacity-50"
          }`}
          style={{ backgroundColor: `#${colorCode}` }}
        ></span>
      )}
    </button>
  );
};

export default Selector;
