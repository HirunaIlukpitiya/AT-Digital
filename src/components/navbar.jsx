import Logo from "../assets/ATlogo.svg";
import MenuButton from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import { useState } from "react";
const NavBar = () => {
  const menuItems = [
    {
        title: "Services",
        link: "/services",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
    {
      title: "Careers",
      link: "/careers",
    },
  ];

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className=" font-Inter px-5 md:px-10 lg:px-[60px] xl:[80px]  h-[77px] bg-ATpurple flex items-center justify-between ">
        <img src={Logo} alt="Logo" className="" />
        <div className="md:hidden">
          <img src={MenuButton} alt="Menu Button" onClick={handleToggle} />
        </div>
        <div className="hidden md:flex">
            <ul className="space-x-5 flex">
                {menuItems.map((item, index = 1) => {
                return (
                    <li key={index} className=" text-white text-xl uppercase">
                    {/* <Link to={item.link}>{item.title}</Link> */}
                    {item.title}
                    </li>
                );
                })}
            </ul>
        </div>
      </nav>
      {toggle ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white flex px-5 py-7 justify-between z-50">
          <div className="">
            <ul className=" space-y-5 uppercase font-semibold">

                <li>Home</li>
              {menuItems.map((item, index) => {
                return (
                  <li key={index} >
                    {/* <Link to={item.link}>{item.title}</Link> */}
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[30px] h-[30px]">
            <img src={CloseIcon} alt="Close Icon" onClick={handleToggle} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
