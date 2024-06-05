import React from "react";

function Question() {
  return (
    <div class=" flex flex-col md:flex-row bg-blue-500  md:bg-newBanner bg-no-repeat relative  bg-right-bottom bg-none bg-contain">
      <div class="p-5 px-10 ">
        <h1 class="text-[50px] my-10 font-semibold md:text-5xl text-white mx-10 text-center md:text-left">
          Do you have questions?
        </h1>
        <div class="flex mx-10 flex-col md:flex-row items-center md:items-start justify-between">
          <h1 class="text-[25px] lg:text-[22px] text-white font-semibold  mb-4 md:mb-0">
            Call or text today, we are here to help!
          </h1>
          <button class="px-8 py-3 mt-2 md:mt-0 md:ml-[80px] text-white font-semibold text-lg bg-red-500 hover:bg-yellow-500 hover:text-white duration-1000">
            View Details
          </button>
        </div>
        <p class="mx-10 text-white font-bold text-lg md:text-2xl mt-4 md:mt-0 md:mb-10 text-center md:text-left">
          555-222-3456
        </p>
      </div>
    </div>
  );
}

export default Question;
