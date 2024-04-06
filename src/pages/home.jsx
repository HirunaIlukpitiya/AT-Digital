import HomeBG from "../assets/homeBG.png";
import QandA from "../components/Q&A";
import WebDev from "../assets/webDev.svg";
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
      <div className=" z-10">
        <img src={HomeBG} alt="HomeBG" className="sm:h-[218px] w-screen" />

        <div className="px-5 py-5 bg-gradient-to-r from-ATlightgreen to-ATskyblue space-y-5 ">
          <p className=" text-white text-[36px] text-left font-bold capitalize leading-10 font-Inter">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <OrangeButton props={{ text: "get free consultation" }} />
        </div>

        <div className=" px-5 py-5 text-center space-y-5">
          <div className=" flex justify-center">
            <img
              src={WebDev}
              alt="Web & Mobile App Development"
              className="h-[275px] w-[275px]"
            />
          </div>
          <Paragraph
            props={{
              title: "Web & Mobile App Development",
              text: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
            }}
          />
          <OrangeButton props={{ text: "learn more" }} />
        </div>
        <div className=" px-5 py-5 text-center space-y-5 ">
          <div className=" flex justify-center">
            <img src={DigStrategy} alt="Digital Strategy Consulting" />
          </div>
          <Paragraph
            props={{
              title: "Digital Strategy Consulting",
              text: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
            }}
          />
          <OrangeButton props={{ text: "learn more" }} />
        </div>
        <div className="px-5 py-5">
          <QandA Arrayprop={QAlist} titleprop={"Frequently asked questions"} />
        </div>
      </div>
    </>
  );
};

export default Home;
