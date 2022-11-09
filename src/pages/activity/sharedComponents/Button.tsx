const Button = ({
  text,
  handleClick,
  param,
}: {
  text: string;
  handleClick: Function;
  param: {
    formName?: string;
    isDisabled?: boolean;
  };
}) => {
  return (
    <button
      className={`block w-full bg-primary text-light rounded-md py-2 md:py-3 text-center max-w-[1080px] mx-auto text-[15px] md:text-[20px] tracking-widest ${
        param?.isDisabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={param?.isDisabled ? param?.isDisabled : false}
      onClick={() => handleClick()}
      form={param?.formName}
    >
      {text}
    </button>
  );
};

export default Button;
