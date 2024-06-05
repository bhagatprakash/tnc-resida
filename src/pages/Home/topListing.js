import React from "react";
import { FetureData } from "../../assest/data/fetureData";
function TopListing() {
  return (
    <div className="max-w-[1320px] mx-auto relative">
      <div className="my-5">
        <h1 className="text-[20px] text-yellow-400 text-center py-2 font-semibold">
          TOP LISTING
        </h1>
        <h1 className="md:text-[46px] text-[23px] font-bold text-center">
          Discover Your Perfect Home - TNC
        </h1>
        <h1 className="md:text-[48px] text-[23px] font-bold text-center">
          HomeLand Sales and Listings
        </h1>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-[50px] content-center sm:text-center sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white border border-gray-700 dark:border-gray-700 hover:border-gray-500 hover:border-dotted w-full sm:w-auto"
            >
              <div className="h-[225px] overflow-hidden relative">
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover object-center hover:scale-125 duration-1000"
                />
                <span className="absolute top-0 left-0 bg-red-500 mt-3 w-[55px] p-2 text-[15px] font-semibold text-white">
                  Sale
                </span>
              </div>

              <div className="pt-4 pb-2 border-gray-300">
                <div className="flex justify-center ">
                  <span className="inline-block py-1 text-[14px] p-5 text-gray-500 mb-2 text-left">
                    <i className="fa-solid fa-ruler-combined mx-2 opacity-80 text-red-500"></i>
                    <spn className="opacity-80">{card.squre}</spn>
                  </span>
                  <span className="inline-block opacity-80 py-1 text-[14px] p-5 text-gray-500 mb-2 text-left">
                    <i className="fa-solid fa-bed mx-2 text-red-500"></i>
                    <spn className="opacity-80">{card.bedrooms}</spn>
                  </span>
                  <span className="inline-block py-1 opacity-80 text-[14px] p-5 text-gray-500 mb-2 text-left">
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
                <span className="text-gray-500 text-[12px]"> {card.month}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopListing;
