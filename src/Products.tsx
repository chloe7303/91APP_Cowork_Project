import Header from "./pages/products/sharedComponents/header/Header";
import Footer from "./pages/products/sharedComponents/footer/Footer";
import Main from "./pages/products/Main";
import SideBar from "./pages/products/sharedComponents/sideBar/SideBar";
import { data } from "./datas/products/data";
import { storeInfoData } from "./datas/products/storeInfoData";
function Products() {
  return (
    <div className="">
      <Header />
      <div className="w-full mx-auto max-w-[1180px] h-[48px] flex items-center">
        <span className="text-[#C89185] text-[14px]">{`首頁 > 日本穿搭 > 穿搭介紹`}</span>
      </div>
      <div className="mt-10 flex w-full mx-auto max-w-[1180px]">
        <div className="mr-[35px] max-w-[265px]">
          <SideBar data={storeInfoData} />
        </div>
        <div className="mb-[260px] w-full mx-auto max-w-[1180px]">
          <Main personData={data.styleHint} hintData={data.styleHint} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
