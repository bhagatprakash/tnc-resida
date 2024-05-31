import React from "react";
import FullCardImage from "../../assest/images/fullcard image.webp";

function Question() {
  return (
    <div class="py-10 flex flex-col md:flex-row bg-blue-500">
      <div class="p-5 px-10 md:w-1/2">
        <h1 class="text-2xl my-10 md:text-5xl text-white mx-10 text-center md:text-left">
          Do you have questions?
        </h1>
        <div class="flex mx-10 flex-col md:flex-row items-center md:items-start">
          <h1 class="text-lg lg:text-xl text-white mb-4 md:mb-0">
            Call or text today, we are here to help!
          </h1>
          <button class="px-8 py-4 mt-4 md:mt-0 md:ml-4 text-white font-semibold text-lg bg-red-500 hover:bg-yellow-500 hover:text-white duration-1000">
            View Details
          </button>
        </div>
        <p class="mx-10 text-white font-bold text-lg md:text-2xl mt-4 md:mt-0 md:mb-10 text-center md:text-left">
          555-222-3456
        </p>
      </div>
      <img
        src={FullCardImage}
        alt="image"
        class="w-full md:w-1/2 mt-10 md:mt-0 md:ml-10"
      />
    </div>
  );
}

export default Question;
