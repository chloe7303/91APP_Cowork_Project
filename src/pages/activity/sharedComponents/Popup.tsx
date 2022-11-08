import Button from "./Button";

const Popup = ({
  title,
  content,
  buttonText,
  buttonAction,
}: {
  title: string;
  content: string;
  buttonText: string;
  buttonAction: Function;
}) => {
  return (
    <div>
      <div className="fixed bg-black w-full top-0 bottom-0 opacity-50"></div>
      <div className="absolute py-6 px-8 rounded-md bg-light top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] opacity-100 text-center">
        <h3 className="md:text-[20px] font-medium mb-5">{title}</h3>
        <h4 className="mb-4 whitespace-nowrap w-[260px]">{content}</h4>
        <Button
          text={buttonText}
          handleClick={() => buttonAction()}
          param={{}}
        />
      </div>
    </div>
  );
};

export default Popup;
