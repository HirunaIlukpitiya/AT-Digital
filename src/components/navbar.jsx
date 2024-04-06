import Logo from "../assets/ATlogo.svg";
import MenuButton from "../assets/menu.svg";
import CloseIcon from "../assets/close.svg";
import { useState } from "react";
const NavBar = () => {
  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Services",
      link: "/services",
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
      <nav className=" sm:px-5 sm:h-[77px] bg-ATpurple flex items-center sm:justify-between ">
        <img src={Logo} alt="Logo" className="" />
        <div className="block md:hidden">
          <img src={MenuButton} alt="Menu Button" onClick={handleToggle} />
        </div>
        <div className="sm:hidden"></div>
      </nav>
      {toggle ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white flex px-5 py-7 justify-between z-50">
          <div className="">
            <ul className=" space-y-5">
              {menuItems.map((item, index) => {
                return (
                  <li key={index}>
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
