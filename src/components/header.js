import React, { useEffect } from "react";
import HeaderImage from "../assest/images/header.webp";

function Header() {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);
  return (
    <>
      <heade>
        <nav className="flex flex-wrap items-center justify-between my-5  lg:px-20 ">
          <div>
            <img src={HeaderImage} className="h-[35px]" alt="header-image" />
          </div>
          <div className="flex lg:hidden">
            <button id="hamburger">
              <img
                className="toggle block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
              <img
                className="toggle hidden"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            </button>
          </div>
          <div className="toggle w-full lg:w-auto lg:flex row-gap-25 text-bold mt-5 md:mt-0 md:border-none hidden">
            <a href="#" className="block   text-[18px]  px-3 py-3  text-center">
              Home<i class="fa-solid fa-angle-down mx-2"></i>
            </a>
            <a href="#" className="block    text-[17px]  px-3 py-3 text-center">
              About Us
            </a>
            <a href="#" className="block   px-3 py-3 text-[17px]  text-center">
              Properties<i class="fa-solid fa-angle-down mx-2"></i>
            </a>
            <a href="#" className="block  px-3 py-3 text-[17px]   text-center ">
              Agents
            </a>
            <a href="#" className="block   px-3 py-3 text-[17px]  text-center ">
              pricing
            </a>
            <a href="#" className="block   px-3 py-3 text-[17px]  text-center ">
              FAQ
            </a>
            <a href="#" className="block  px-3 py-3 text-[17px]   text-center ">
              Blogs<i class="fa-solid fa-angle-down mx-2"></i>
            </a>
            <a href="#" className="block  px-2 lg:px-3 py-3 lg:text-[17px]  ">
              Pages<i class="fa-solid fa-angle-down mx-2"></i>
            </a>
          </div>
          <a
            href="#"
            className="toggle lg:flex w-full lg:w-auto px-8 py-2 sm:text-center text-center bg-red-700 text-[18px] opacity-70 text-white font-semibold border items-center justify-center hidden"
          >
            Sign Up
          </a>
        </nav>
      </heade>
    </>
  );
}

export default Header;
