import HomeBG from "../assets/homeBG.png";
import QandA from "../components/Q&A";
import WebDev from "../assets/webDev.png";
import DigStrategy from "../assets/digStrategy.svg";
import Paragraph from "../components/paragraph";
import OrangeButton from "../components/orangeButton";

const Home = () => {
  const QAlist = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
  ];
  return (
    <>
      <div className=" z-10 font-Inter text-ATblack">
        <section className="relative">
          <img
            src={HomeBG}
            alt="HomeBG"
            className="sm:h-[218px] md:h-[448px] lg:h-[700px] lg:z-10 w-screen mx-auto"
          />

          <div className="px-5 py-5 md:px-10 lg:bottom-[60px] lg:left-[60px] xl:left-[80px] lg:h-fit md:py-10 lg:z-20 lg:absolute lg:w-[622px] lg:pl-[60px] bg-gradient-to-r from-ATlightgreen to-ATskyblue space-y-5">
            <p className=" text-white text-[36px] md:text-[48px] text-left font-bold capitalize leading-[50px]">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </p>
            <OrangeButton props={{ text: "get free consultation" }} />
          </div>
        </section>

        <section className="px-5 py-5 md:px-10 md:py-10 space-y-5 lg:px-[150px] xl:px-[250px]">
          <div className="text-center md:text-left flex-row md:flex md:items-center md:space-x-5 xl:space-x-[108px]">
            <img
              src={WebDev}
              alt="Web & Mobile App Development"
              className="h-[275px] w-[275px] lg:h-[346px] lg:w-[346px] xl:h-[414px] xl:w-[414px] mx-auto"
            />
            <div className=" space-y-5">
              <Paragraph
                props={{
                  title: "Web & Mobile App Development",
                  text: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
                }}
              />
              <OrangeButton props={{ text: "learn more" }} />
            </div>
          </div>

          <div className=" text-center md:text-left md:flex md:flex-row-reverse space-y-5 md:items-center ">
            <img src={DigStrategy} alt="Digital Strategy Consulting"
            className="h-[275px] w-[275px] lg:h-[346px] lg:w-[346px] xl:h-[414px] xl:w-[414px] mx-auto" />
            <div className=" space-y-5 xl:mr-[108px] md:mr-[20px] ">
              <Paragraph
                props={{
                  title: "Digital Strategy Consulting",
                  text: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
                }}
               />
              <OrangeButton props={{ text: "learn more" }} />
            </div>
          </div>

          <div className=" xl:px-[190px]">
            <QandA
              Arrayprop={QAlist}
              titleprop={"Frequently asked questions"}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
