import React from "react";

function Banner() {
  return (
    <div className="bg-banner h-[700px] bg-cover bg-no-repeat shadow-insetcustom flex items-center justify-center  ">
      <div className="text-center container mx-auto my-auto ">
        <h1 className="text-[78px] text-center text-white  font-semibold">
          Find Your Beachfront Bliss
        </h1>
        <h1 className="text-[78px] sm:[34px] text-white  text-center font-semibold">
          with Our Coastal Listings
        </h1>
        <p className="text-[18px] text-white ">
          Your Partner in Real Estate Success. Our mission is to help you find
          the perfect property or sell your
        </p>
        <p className="text-[18px] text-white py-3">current one with ease.</p>

        <button className=" px-8 py-4  text-white font-semibold  text-[18px] bg-red-500  items-center justify-center hover:bg-yellow-500 hover:text-white duration-1000">
          View Details
        </button>
      </div>
    </div>
  );
}
export default Banner;
