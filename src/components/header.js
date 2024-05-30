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
      <header>
        <nav className="flex flex-wrap items-center justify-between my-5 px-5 lg:px-20 ">
          <div>
            <img
              src={HeaderImage}
              className="h-[40px] my-3"
              alt="header-image"
            />
          </div>
          <div className="flex md:hidden">
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
          <div className="toggle hidden w-full md:w-auto md:flex  row-gap-25 text-bold mt-5 md:mt-0  md:border-none">
            <a href="#" className="block   text-[18px]  px-3 py-3  text-center">
              Home<i class="fa-solid fa-angle-down mx-2"></i>
            </a>
            <a href="#" className="block    text-[18px]  px-3 py-3 text-center">
              About Us
            </a>
            <a href="#" className="block   px-3 py-3 text-[18px]  text-center">
              Properties<i class="fa-solid fa-angle-down mx-2"></i>
            </a>
            <a href="#" className="block  px-3 py-3 text-[18px]   text-center ">
              Agents
            </a>
            <a href="#" className="block   px-3 py-3 text-[18px]  text-center ">
              pricing
            </a>
            <a href="#" className="block   px-3 py-3 text-[18px]  text-center ">
              FAQ
            </a>
            <a href="#" className="block  px-3 py-3 text-[18px]   text-center ">
              Blogs<i class="fa-solid fa-angle-down mx-2"></i>
            </a>
            <a href="#" className="block  px-2 lg:px-3 py-3 lg:text-[18px]  ">
              Pages<i class="fa-solid fa-angle-down mx-2"></i>
            </a>
          </div>

          <a
            href="#"
            className="toggle hidden md:flex w-full md:w-auto px-8 py-4 sm:text-center text-center bg-red-700 text-[20px] text-white font-semibold border  items-center justify-center"
          >
            Sign Up
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
