import appStoreIcon from "./appStoreIcon.png";
import googlePlayIcon from "./googlePlayIcon.png";
import instagramIcon from "./instagramIcon.png";
import lineIcon from "./lineIcon.png";
import facebookIcon from "./facebookIcon.png";
import facebook from "./facebook.png";

export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 right-0 shadow-[inset_0px_1px_0px_#DDDDDD] h-[260px]">
      <div className="max-w-[1164px] pt-[40px] mx-auto">
        <div className="flex">
          <div>
            <img src={facebook} />
            <div className="flex mt-2">
              <img className="mr-2" src={facebookIcon} />
              <img className="mr-2" src={lineIcon} />
              <img className="mr-2" src={instagramIcon} />
            </div>
          </div>
          <div className="w-[824px] flex justify-between">
            <div className="text-[#333333] flex flex-col ml-[84px]">
              <span className="mt-2">關於我們</span>
              <span className="text-[12px] cursor-pointer mt-2">品牌故事</span>
              <span className="text-[12px] cursor-pointer mt-2">商店簡介</span>
              <span className="text-[12px] cursor-pointer mt-2">門市資訊</span>
              <span className="text-[12px] cursor-pointer mt-2">
                隱私權條款
              </span>
            </div>

            <div className="text-[#333333] flex flex-col">
              <span className="mt-2">購物說明</span>
              <span className="text-[12px] cursor-pointer mt-2">付款方式</span>
              <span className="text-[12px] cursor-pointer mt-2">運送方式</span>
              <span className="text-[12px] cursor-pointer mt-2">
                退換貨方式
              </span>
            </div>

            <div className="text-[#333333] flex flex-col">
              <span className="mt-2">客服資訊</span>
              <span className="text-[12px] cursor-pointer mt-2">客服留言</span>
              <span className="text-[12px] cursor-pointer mt-2">常見問題</span>
              <span className="text-[12px] cursor-pointer mt-2">
                會員權益聲明
              </span>
              <span className="text-[12px] cursor-pointer mt-2">聯絡我們</span>
            </div>

            <div className="flex flex-col w-[200px]">
              <span className="text-[#333333] mt-2">官方APP</span>
              <input
                placeholder="請輸入台灣手機號碼"
                className="mt-2 rounded-[4px] text-[14px] py-[10px] px-[12px] border border-solid 
            border-[#DDDDDD]"
              />
              <button className="mt-2 text-[14px] rounded-[4px] bg-[#333333] text-[#FFFFFF] py-[10px] px-[20px]">
                免費傳送載點至手機
              </button>
              <div className="flex justify-between mt-2 ">
                <img src={googlePlayIcon} />
                <img src={appStoreIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-[#BBBBBB] text-[12px]">
            ＠2015 by 紘瑞國際股份有限公司
          </span>
          <span className="text-[#BBBBBB] text-[12px] mr-[42px]">
            本站最佳瀏覽環境請使用Google Chrome、Firefox或Edge以上版本
          </span>
        </div>
      </div>
    </div>
  );
}
