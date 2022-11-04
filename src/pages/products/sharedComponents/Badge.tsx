const Badge = ({ text }: { text: string | null }) => {
  return (
    <div className="absolute bottom-[12px] left-[50%] -translate-x-[50%] rounded-[32px] text-light bg-[#666666] px-3.5 py-1.5 text-[14px]">
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
};

export default Badge;
