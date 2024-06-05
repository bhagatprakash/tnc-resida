import React from "react";
import { RecentData } from "../../assest/data/recentData";

function RecentListing() {
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div className="my-10">
        <h1 className="text-[20px] text-yellow-400 text-center py-2 font-semibold">
          RECENT LISTING
        </h1>
        <h1 className="md:text-[46px] text-[23px] font-bold text-center">
          Explore Your Ideal Home - Browse
        </h1>
        <h1 className="md:text-[46px] text-[23px] font-bold text-center">
          TNC HomeLand's Latest Property
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] sm:text-center sm:grid-cols-2 lg:grid-cols-3 sm:px-12 ">
          {RecentData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white border border-gray-700  hover:border-gray-500 hover:border-dotted transition-all duration-300"
            >
              <div className="h-[225px] overflow-hidden relative">
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover hover:scale-125 duration-1000"
                  style={{ objectFit: "cover" }}
                />
                <span className="absolute top-0 left-0 bg-yellow-400  mt-3 w-[55px] p-2 text-[15px] font-semibold text-white">
                  Rent
                </span>
              </div>
              <div className="pt-4 pb-2 border-gray-300">
                <div className="flex">
                  <span className="inline-block py-1  opacity-80  text-[14px]  p-5 text-gray-500 mb-2 text-left">
                    <i className="fa-solid fa-ruler-combined mx-2 text-red-500"></i>

                    <spn className="opacity-80">{card.squre}</spn>
                  </span>
                  <span className="inline-block py-1  opacity-80  text-[14px]  p-5 text-gray-500 mb-2 text-left">
                    <i className="fa-solid fa-bed mx-2 text-red-500"></i>
                    <spn className="opacity-80">{card.bedrooms}</spn>
                  </span>
                  <span className="inline-block py-1  opacity-80  text-[14px] p-5 text-gray-500 mb-2 text-left">
                    <i className="fa-solid fa-bath mx-2 text-red-500"></i>
                    <spn className="opacity-80"> {card.bathrooms}</spn>
                  </span>
                </div>
              </div>

              <a href="#">
                <h5 className="my-3 text-[20px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                  {card.type}
                </h5>
              </a>

              <p className="mb-3 text-[15px] mx-4 text-gray-500 dark:text-gray-400 text-left">
                {card.location}
              </p>
              <p className="my-5 mx-4 text-[20px] text-red-500 font-semibold dark:text-gray-400 text-left">
                <span className="line-through text-gray-400">
                  {card.oldprise}
                </span>
                {card.price}
                <span className="text-[14px] text-gray-400"> / Month</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentListing;
