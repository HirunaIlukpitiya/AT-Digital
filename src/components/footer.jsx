import Logo from "../assets/ATlogo.svg";

const Footer = () => {
  return (
    <>
      <footer className="relative z-0 px-5 md:px-10 lg:px-[60px] py-8 bg-ATpurple text-white space-y-10">
        <section className=" space-y-10 lg:grid grid-cols-2 lg:space-y-0 justify-between">
        <div className="">
        <img src={Logo} alt="Logo" className="" />
        <br />

        <p className="text-left md:w-[443px]">
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achive single objective - your
          business results.
        </p>
        </div>
        
        <div className="space-y-7 md:grid md:grid-cols-2 md:space-y-0 lg:space-x-[108] ">
            <ul className="space-y-2">
              <li className=" text-2xl font-semibold">Our Technologies</li>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
            <ul className="space-y-2">
              <li className="text-2xl font-semibold">Our Services</li>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
        </div>
        </section>


        <section className="space-y-4">
        <div className="md:px-10 lg:px-[200px] xl:px-[320px]">
        <hr />
        </div>
        <p className="flex justify-center space-x-5">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
        </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
