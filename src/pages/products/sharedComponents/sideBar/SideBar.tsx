import arrowDrop from "./arrowDrop.png";
export default function SideBar({
  data,
}: {
  data: {
    name: string;
    data: string[];
  }[];
}) {
  return (
    <div>
      {data?.map((element) => {
        return (
          <details
            key={`${element.data}_${element.name}`}
            className="text-[14px] text-[#999999] mb-3 "
          >
            <summary className="flex w-[196px] justify-between">
              <span className="cursor-pointer">{element.name}</span>
              {element.data.length !== 0 ? (
                <img
                  alt="drop arrow"
                  src={arrowDrop}
                  className="cursor-pointer"
                />
              ) : (
                <></>
              )}
            </summary>
            <div className="pl-[18px]">
              {element.data.map((ele, index) => {
                return (
                  <span
                    key={`${ele}_${index}`}
                    className="block mt-3 hover:text-[#333333] hover:cursor-pointer hover:underline"
                  >
                    {ele}
                  </span>
                );
              })}
            </div>
          </details>
        );
      })}
    </div>
  );
}
