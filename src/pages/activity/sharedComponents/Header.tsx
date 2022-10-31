import logo from "./logo.png";

const Header = () => {
  return (
    <header className="bg-primary py-5">
      <div className="max-w-[1080px] mx-auto pl-5 sm:pl-0">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
