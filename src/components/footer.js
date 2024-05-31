import React from "react";
import headerImage from "../assest/images/header.webp";

function Footer() {
  return (
    <>
      <div className="bg-bgColors">
        <div className="flex flex-col mx-auto sm:flex-row">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center md:text-left my-10 px-5 gap-6">
            <div className="cursor-pointer text-white">
              <img
                src={headerImage}
                alt="blog img"
                className="h-[30px] my-5 mx-auto md:mx-0 filter invert"
              />
              <p className="text-[17px] my-3 text-gray-400">
                Embrace the world of digital currency and redefine your
                investment strategies with us.
              </p>
              <div className="space-x-3 text-center lg:text-left py-3">
                <i className="text-[20px] p-2 fa-brands fa-whatsapp border rounded-[100%] text-gray-300 hover:bg-red-500 hover:text-white"></i>
                <i className="text-[20px] p-2 fa-brands fa-facebook border rounded-[100%] text-gray-300 hover:bg-red-500 hover:text-white"></i>
                <i className="text-[20px] p-2 fa-brands fa-twitter border rounded-[100%] text-gray-300 hover:bg-red-500 hover:text-white"></i>
                <i className="text-[20px] p-2 fa-brands fa-youtube border rounded-[100%] text-gray-300 hover:bg-red-500 hover:text-white"></i>
                <i className="text-[20px] p-2 fa-brands fa-tiktok border rounded-[100%] text-gray-300 hover:bg-red-500 hover:text-white"></i>
              </div>
            </div>
            <div className="cursor-pointer text-white">
              <h1 className="text-[20px] font-semibold my-5">Company</h1>
              <p className="text-[17px] text-gray-400 py-1">Home</p>
              <p className="text-[17px] text-gray-400 py-1">Blog</p>
              <p className="text-[17px] text-gray-400 py-1">Properties</p>
              <p className="text-[17px] text-gray-400 py-1">Agents</p>
              <p className="text-[17px] text-gray-400 py-1">FAQ</p>
            </div>
            <div className="cursor-pointer text-white">
              <h1 className="text-[20px] font-semibold my-5">Pages</h1>
              <p className="text-[17px] text-gray-400 py-1">About Us</p>
              <p className="text-[17px] text-gray-400 cursor-pointer">
                Contact
              </p>
              <p className="text-[17px] text-gray-400 py-1">Style-Guide</p>
              <p className="text-[17px] text-gray-400 py-1">Change-Logo</p>
              <p className="text-[17px] text-gray-400 py-1">Licensing</p>
            </div>
            <div className="cursor-pointer text-white">
              <h1 className="text-[20px] font-semibold my-5">
                Subscribe Newsletter
              </h1>
              <p className="text-[17px] py-1 text-gray-400">
                Subscribe to our newsletter for weekly updates, market insights,
                and special offers.
              </p>
              <form>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  class="block w-full px-4 py-2 mt-2 border focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div class="text-left my-5">
                  <button
                    type="submit"
                    class="px-6 py-3 w-full text-white font-semibold text-[18px] bg-red-500 hover:bg-yellow-500 duration-1000 opacity-70"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="h-[1px] bg-gray-500 border-0 w-[100%] max-w-[1500px]" />
        </div>
        <p className="text-[16px] p-5 md:mx-20 text-gray-300">
          Copyright © 2024 TNC Resida | Designed by prakashkumar - Powered by
          Simbanic
        </p>
      </div>
    </>
  );
}

export default Footer;
