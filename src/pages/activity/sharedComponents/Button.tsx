const Button = ({ text }: { text: string }) => {
  return (
    <button className="block w-full bg-primary text-light rounded-md py-3 text-center">
      {text}
    </button>
  );
};

export default Button;
