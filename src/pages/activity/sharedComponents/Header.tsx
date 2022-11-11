import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-primary py-5">
      <div className="max-w-[1080px] mx-auto pl-5 sm:pl-0">
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </header>
  );
};

export default Header;
