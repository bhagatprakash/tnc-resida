import React from "react";
import { FetureData } from "../../assest/data/cardData";
function Card() {
  return (
    <div className=" my-20 mx-auto ">
      <div className="my-5">
        <h1 className="md:text-[48px] text-[23px] text-center  font-bold dark:text-white">
          Exclusive Properties and Prestigious
        </h1>
        <h1 className="md:text-[48px] text-[23px] font-bold text-center  dark:text-white">
          Estates Await
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="grid grid-cols-1 gap-6 sm:text-center md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 px-12 ">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white rounded-lg shadow border border-transparent dark:border-gray-700 hover:border-gray-500 hover:border-dotted flex flex-col items-center justify-center"
            >
              <div className="lg:h-[225px]  h-[170px] mx-auto flex items-center justify-center">
                <img
                  src={card.image}
                  alt="card"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <a href="#">
                <h5 className="my-2 text-[18px] mx-4 tracking-tight text-gray-700  text-center dark:text-black">
                  {card.type}
                </h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
