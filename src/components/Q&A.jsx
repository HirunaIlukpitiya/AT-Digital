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
      <div className="relative space-y-5 z-50">
        <h2
          className={`text-ATpurple font-semibold text-center px-5 ${
            !titleprop ? "hidden" : null
          }`}
        >
          {titleprop}
        </h2>
        {QAList.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <div
              className="bg-ATlightpurple w-auto h-auto space-y-3 px-5 py-5 rounded"
              key={index}
            >
              <div className="flex justify-between space-x-40">
                <div className={""}>
                  <h4
                    className={`font-semibold text-${
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
                {isOpen && <p className="text-ATsilver">{item.answer}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default QandA;
