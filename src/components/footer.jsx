import Logo from "../assets/ATlogo.svg";

const Footer = () => {
  return (
    <>
      <footer className=" z-10 sm:px-10 sm:py-8 bg-ATpurple text-white bottom-0">
        <img src={Logo} alt="Logo" className="" />
        <br />

        <p className="text-left">
          Your goal is our target. Not anything in between. We use online
          marketing platforms and tools to achive single objective - your
          business results.
        </p>
        <br />
        <br />
        <div className="grid sm:space-y-7">
          <div className=" ">
            <dl className=" space-y-2">
              <dt className=" text-2xl font-semibold">Our Technologies</dt>
              <dd>ReactJS</dd>
              <dd>Gatsby</dd>
              <dd>NextJS</dd>
              <dd>NodeJS</dd>
            </dl>
          </div>

          <div className=" ">
            <dl className=" space-y-2">
              <dt className="text-2xl font-semibold">Our Services</dt>
              <dd>Social Media Marketing</dd>
              <dd>Web & Mobile App Development</dd>
              <dd>Data & Analytics</dd>
            </dl>
          </div>
        </div>
        <br />
        <hr />
        <p className="flex justify-center space-x-5">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
