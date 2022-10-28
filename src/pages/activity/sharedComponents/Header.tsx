import logo from './logo.png';

const Header = () => {
  return (
    <header className="bg-[#FF5353] py-5 ">
      <div className="max-w-[1080px]">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
