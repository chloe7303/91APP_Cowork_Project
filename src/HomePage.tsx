import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-[#cad0fc] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#f9f2b1] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#f8b6d0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <button
            className="w-full p-6 bg-white rounded-lg flex items-center justify-between"
            onClick={() => navigate("/activity")}
          >
            <div className="text-gray-500 text-[26px]">活動登記流程</div>
            <div className="px-4 py-2 rounded-xl bg-[#FF5353] text-light">
              91APP
            </div>
          </button>
          <button
            className="w-full p-6 bg-white rounded-lg flex items-center justify-between"
            onClick={() => navigate("/products")}
          >
            <div className="text-gray-500 text-[26px]">商品詳細頁</div>
            <div className="px-4 py-2 rounded-xl bg-[#C89185] text-light">
              SASA
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
