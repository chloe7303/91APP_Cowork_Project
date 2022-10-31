const Button = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: Function;
}) => {
  return (
    <button
      className="block w-full bg-primary text-light rounded-md py-2 md:py-3 text-center max-w-[1080px] mx-auto text-[15px] md:text-[20px] tracking-widest"
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
};

export default Button;
