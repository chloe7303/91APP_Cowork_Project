const Badge = ({ text }: { text: string | null }) => {
  return (
    <div className="absolute bottom-[12px] left-[12px] rounded-[32px] text-light bg-[#666666] py-1.5 px-4 text-[14px]">
      {text}
    </div>
  );
};

export default Badge;
