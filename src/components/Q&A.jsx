import Minus from "../assets/minus.svg";
import Plus from "../assets/plus.svg";
import { useState } from "react";

const QandA = ({ Arrayprop, titleprop }) => {
  const QAList = Arrayprop;

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <div className="relative space-y-5 md:space-y-7 z-50">
        <h2
          className={`text-ATpurple font-semibold text-center px-5 ${
            !titleprop ? "hidden" : null
          }`}
        >
          {titleprop}
        </h2>
        <div className="space-y-5">
        {QAList.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <div
              className="bg-ATlightpurple w-auto h-auto space-y-5  px-5 py-5 rounded z-50"
              key={index}
            >
              <div className="flex justify-between space-x-32  ">
                <div className={""}>
                  <h4
                    className={`font-semibold md:text-[22px] text-${
                      isOpen ? "ATpurple" : "Black"
                    }`}
                  >
                    {item.question}
                  </h4>
                </div>
                <img
                  src={isOpen ? Minus : Plus}
                  alt={isOpen ? "Minus" : "Plus"}
                  onClick={() => toggle(index)}
                />
              </div>

              <div className="">
                {isOpen && <p className="text-ATsilver text-[16px] md:text-[18px]">{item.answer}</p>}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default QandA;
