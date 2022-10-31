import { useForm, SubmitHandler } from "react-hook-form";

export default function SubmitForm({
  id,
  submitFunction,
}: {
  id: string;
  submitFunction: Function;
}) {
  type Inputs = {
    fullName: string;
    phoneNumber: string;
    email: string;
    privacyAccept: boolean;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (values) =>
    submitFunction({ ...values, areaCode: "+886" });

  return (
    <>
      <form
        autoComplete="off"
        id={id}
        onSubmit={handleSubmit(onSubmit)}
        className="w-[335px] mx-auto"
      >
        <div className={`${errors.fullName ? "mb-[20px]" : "mb-[15px]"}`}>
          <span className="text-[14px] font-['Noto Sans TC'] text-[#FF5353]">
            *{" "}
          </span>
          <span className="text-[14px] font-['Noto Sans TC']">姓名</span>

          <input
            className={`mt-[7px] py-[8.5px] px-[10px] rounded-[5px] border border-solid placeholder-[#999999] text-[14px] w-[100%] ${
              errors.fullName ? "border-primary" : "border-[#dddddd]"
            } ${
              errors.fullName
                ? "focus:outline-primary"
                : "focus:outline-[rgb(26,115,232)]"
            }`}
            placeholder="輸入姓名"
            {...register("fullName", {
              required: "請輸入中文姓名，限制2~7個字",
              pattern: {
                value: /^\p{Script=Han}{2,7}$/u,
                message: "請輸入中文姓名，限制2~7個字",
              },
            })}
          />
          {errors.fullName ? (
            <>
              {errors.fullName.type === "required" && (
                <p className="mt-[5px] text-[13px] text-primary">
                  {errors.fullName.message}
                </p>
              )}
              {errors.fullName.type === "pattern" && (
                <p className="mt-[5px] text-[13px] text-primary">
                  {errors.fullName.message}
                </p>
              )}
            </>
          ) : null}
        </div>
        <div className="mb-[15px]">
          <span className="text-[14px] font-['Noto Sans TC'] text-[#FF5353]">
            *{" "}
          </span>
          <span className="text-[14px] font-['Noto Sans TC']">
            手機號碼 (需通過簡訊驗證)
          </span>
          <div className="flex items-center">
            <div>
              <button
                type="button"
                className="inline-flex w-[116px] mr-[5px] w-full items-center justify-between border border-solid border-[#DDDDDD] bg-[#F4F4F4] mt-[7px] py-[8.5px] px-[10px] rounded-[5px] align-center text-[14px] text-[#999999] font-['Noto Sans TC'] cursor-not-allowed"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                +886
                <svg
                  className="-mr-1 ml-2 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#999999"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <input
              className={`mt-[7px] py-[8.5px] px-[10px] rounded-[5px] border border-solid placeholder-[#999999] text-[14px] w-[100%] ${
                errors.phoneNumber ? "border-primary" : "border-[#dddddd]"
              } ${
                errors.phoneNumber
                  ? "focus:outline-primary"
                  : "focus:outline-[rgb(26,115,232)]"
              }`}
              placeholder="輸入手機號碼"
              {...register("phoneNumber", {
                required: "手機號碼格式錯誤，請重新輸入",
                pattern: {
                  value: /^9\d{8}$/,
                  message: "手機號碼格式錯誤，請重新輸入",
                },
              })}
            />
          </div>
          {errors.phoneNumber ? (
            <>
              {errors.phoneNumber.type === "required" && (
                <p className="mt-[5px] ml-[121px] text-[13px] text-primary">
                  {errors.phoneNumber.message}
                </p>
              )}
              {errors.phoneNumber.type === "pattern" && (
                <p className="mt-[5px] ml-[121px] text-[13px] text-primary">
                  {errors.phoneNumber.message}
                </p>
              )}
            </>
          ) : null}
        </div>
        <div className="mb-[15px]">
          <span className="text-[14px] font-['Noto Sans TC'] text-[#FF5353]">
            *{" "}
          </span>
          <span className="text-[14px] font-['Noto Sans TC']">
            Email 信箱 (開賣時用此 email 通知)
          </span>

          <input
            className="mt-[7px] py-[8.5px] px-[10px] rounded-[5px] border border-solid border-[#DDDDDD] placeholder-[#999999] text-[14px] w-[100%]"
            placeholder="輸入 Email"
            {...register("email", {
              required: "Email 格式錯誤，請重新輸入",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Email 格式錯誤，請重新輸入",
              },
            })}
          />
          {errors.email ? (
            <>
              {errors.email.type === "required" && (
                <p className="mt-[5px] text-[13px] text-primary">
                  {errors.email.message}
                </p>
              )}
              {errors.email.type === "pattern" && (
                <p className="mt-[5px] text-[13px] text-primary">
                  {errors.email.message}
                </p>
              )}
            </>
          ) : null}
        </div>
        <div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 rounded-[3px] border border-solid border-[#BBBCBB] focus:ring-0 focus:ring-offset-0"
              {...register("privacyAccept", { required: true })}
            />
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm text-gray-900"
            >
              我已經閱讀並同意{" "}
              <span className="text-[#428BCA] hover:underline">
                隱私權及網站使用條款
              </span>
            </label>
          </div>
          {errors.privacyAccept ? (
            <>
              {errors.privacyAccept.type === "required" && (
                <p className="mt-[5px] text-[13px] text-primary">
                  請確認同意隱私權及網站使用條款
                </p>
              )}
              {errors.privacyAccept.type === "pattern" && (
                <p className="mt-[8px] text-[13px] text-primary">
                  {errors.privacyAccept.message}
                </p>
              )}
            </>
          ) : null}
        </div>
      </form>
    </>
  );
}
