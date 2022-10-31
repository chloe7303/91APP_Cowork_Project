const Button = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: Function;
}) => {
  return (
    <button
      className="block w-full bg-primary text-light rounded-md py-3 text-center max-w-[1080px] mx-auto"
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
};

export default Button;
