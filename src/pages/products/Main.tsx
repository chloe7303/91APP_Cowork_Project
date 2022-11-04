export default function Main({
  personData,
  hintData,
}: {
  personData: { img: string }[];
  hintData: { img: string }[];
}) {
  return (
    <div>
      <div className="flex flex-col">
        <div></div>
        <div className="mb-[60px]">
          <span>此店員其他穿搭</span>
          <div className="flex max-w-[872px] justify-between mt-[14px]">
            {personData?.map((element) => {
              return (
                <img
                  alt={element.img}
                  src={element.img}
                  className="w-[132px] cursor-pointer hover:opacity-50"
                />
              );
            })}
          </div>
        </div>
        <div>
          <span>其他穿搭推薦</span>
          <div className="flex max-w-[872px] justify-between mt-[14px]">
            {hintData?.map((element) => {
              return (
                <img
                  alt={element.img}
                  src={element.img}
                  className="w-[132px] cursor-pointer hover:opacity-50"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
