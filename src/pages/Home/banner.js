import React from "react";

function Banner() {
  return (
    <div
      className="bg-banner h-[800px] bg-cover bg-no-repeat shadow-insetcustom flex items-center justify-center  "
      style={{ objectFit: "cover" }}
    >
      <div className="text-center container mx-auto my-auto ">
        <h1 className="md:text-[60px] text-[37px] text-center text-white  font-semibold">
          Find Your Beachfront Bliss
        </h1>
        <h1 className="md:text-[60px] text-[37px] text-white  text-center font-semibold">
          with Our Coastal Listings
        </h1>
        <br />
        <p className="text-[21px] md:text-[18px] text-gray-400 ">
          Your Partner in Real Estate Success. Our mission is to help you find
          the perfect property or sell your
        </p>
        <p className="lg:text-[18px] text-[21px] text-gray-400 py-2">
          current one with ease.
        </p>

        <button className=" px-8 py-3 my-5  opacity-90 text-white font-semibold  text-[18px] bg-red-500  items-center justify-center hover:bg-yellow-500 hover:text-white duration-1000">
          View Details
        </button>
      </div>
    </div>
  );
}
export default Banner;
