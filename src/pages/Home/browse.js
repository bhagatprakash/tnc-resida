import React from "react";
import BannerImage from "../../assest/images/banner Two.webp";

function Browse() {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="basis-full md:basis-1/2">
          <img
            src={BannerImage}
            alt="about image"
            className="w-full h-[100%]"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" dark:border basis-full md:basis-1/2 bg-bgColors dark:bg-gulf-blue px-3  ">
          <div
            className="flex flex-col  min-h-[50px] lg:mt-[120px] mt-[70px] md:text-left"
            data-aos="fade-right"
          >
            <h1 className="lg:text-[48px]   text-[33px] text-white mx-10  font-semibold text-left">
              Browse our Wide Selection
            </h1>
            <h1 className="lg:text-[48px]  text-[33px] mx-10  text-white font-semibold text-left">
              of Luxury Properties
            </h1>
            <p className="mx-10  text-gray-400 text-[20px] py-2 text-left">
              Discover Your Dream Home with TNC Real Estate. Our deep market
              insights and commitment to excellence ensure a seamless and
              enjoyable real estate journey.
            </p>
          </div>
          <div className="text-left mx-10 my-10">
            <button className=" px-8 py-4  text-white font-semibold   text-[18px] bg-red-500  hover:bg-yellow-500 hover:text-white duration-1000">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
