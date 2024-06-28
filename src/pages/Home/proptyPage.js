import React from "react";
import propety from "../../assest/images/propety page.png";
import propety1 from "../../assest/images/propty page-2.png";
import propety2 from "../../assest/images/propetypage-3.png";
import propety3 from "../../assest/images/propety page-4.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";
import profile from "../../assest/images/profile.png";
import Question from "./question";

function ProptyPage() {
  return (
    <>
      {/* // image */}
      <div className="my-5">
        <div className="grid grid-cols-1 sm:text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative group">
            <img src={propety} alt="propety" className="h-full w-full" />
            <div className="absolute inset-0 bg-bgColors opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={propety1} alt="propety" className="h-full w-full" />
            <div className="absolute inset-0 bg-bgColors opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={propety2} alt="propety" className="h-full w-full" />
            <div className="absolute inset-0 bg-bgColors opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
          </div>
          <div className="relative group">
            <img src={propety3} alt="propety" className="h-full w-full" />
            <div className="absolute inset-0 bg-bgColors opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
      {/* // card */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-5 px-5 sm:px-12 gap-5">
        <div>
          <h1 className="font-bold text-3xl text-yellow-500 text-left my-5 ">
            $12000.00
          </h1>
          <h2 className="font-bold text-4xl text-left my-5 dark:text-white">
            Dream Town
          </h2>
          <div className="pt-4 pb-2 border-gray-300 ">
            {/* icon  */}
            <div className="flex flex-cols ">
              <span className="flex py-1 p-5 bg-gray-200 text-gray-900 mb-2 text-center">
                <FaRulerCombined className=" mx-2 text-red-500 text-xl " />
                <span className="opacity-80 text-[17px]">960 SqFt</span>
              </span>
              <span className="flex py-1  mx-3 p-5 bg-gray-200 text-gray-900 mb-2 text-center">
                <FaBed className="mx-2 text-red-500 text-2xl" />
                <span className="opacity-80 text-[17px]">3 Beds</span>
              </span>
              <span className="flex py-1 mx-3 p-5 bg-gray-200 text-gray-900 mb-2 text-center">
                <FaBath className="mx-2 text-red-500 text-2xl" />
                <span className="opacity-80 text-[17px]">3 Baths</span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="pt-5">
            <div className="flex  gap-5 justify-center ">
              <div className="p-5 bg-gray-200">
                <p className="my-10 flex justify-center">
                  <FaMapMarkerAlt className="text-3xl text-red-500 text-center opacity-85" />
                </p>

                <h1 className="text-xl opacity-80">
                  {" "}
                  2118 Thornridge Cir. Syracuse, Connecticut 35624t
                </h1>
              </div>
              <div className="p-10 bg-gray-200">
                <p className="my-5 flex justify-center">
                  <FaPhoneAlt className="text-3xl text-red-500 opacity-85" />
                </p>

                <h1 className="text-xl opacity-80">
                  (603) 555-0123 (209) 555-0104
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[2px] my-5" />
      {/* Property Description */}
      <div className="max-w-[1320px] mx-auto relative">
        <div className="bg-accent/20">
          <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-1 md:text-right md:justify-items-right  lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
            <div className="md:col-span-2 text-left flex flex-col overflow-auto  ">
              <div className="my-10">
                <h1 className="text-[18px] font-semibold text-left sm:text-center lg:text-left opacity-85 dark:text-white">
                  Property Description
                </h1>

                <hr className="h-[2px] bg-green-500 border-0 w-[200px] my-4" />
                <p className="text-[17px] tracking-wide text-gray-500 text-left my-3 lg:text-left">
                  Indulge in a unique blend of contemporary design and artistic
                  inspiration in this 3-bedroom loft. This space effortlessly
                  aligns modern living with creative allure, inviting you to
                  connect with its vibrant energy. <br />
                  As you step inside, an inviting connection forms between the
                  open layout and the surrounding cityscape. Each design element
                  invites you to explore further - from the subtle stroke of
                  lines enhancing the architecture to the carefully selected
                  objects that embody a harmonious balance of form and function.
                </p>
              </div>

              <div>
                <h1 className="text-2xl font-semibold dark:text-white">
                  ADDITIONAL DETAILS
                </h1>
                <hr className="my-5" />

                <div className="grid lg:grid-cols-2 grid-cols-1 justify-between dark:text-white">
                  <div className="grid grid-cols-2 justify-between">
                    <span className="font-semibold">Building Age</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                  <div className="grid grid-cols-2   justify-between">
                    <span className="font-semibold">Building Age</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 justify-between dark:text-white">
                  <div className="grid grid-cols-2 justify-between">
                    <span className="font-semibold">Property Type</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                  <div className="grid grid-cols-2   justify-between">
                    <span className="font-semibold">Property Type</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 justify-between dark:text-white">
                  <div className="grid grid-cols-2 justify-between">
                    <span className="font-semibold">Property Status</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                  <div className="grid grid-cols-2   justify-between">
                    <span className="font-semibold">Property Status</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 justify-between dark:text-white">
                  <div className="grid grid-cols-2 justify-between">
                    <span className="font-semibold">Gas</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                  <div className="grid grid-cols-2   justify-between">
                    <span className="font-semibold">Gas</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 justify-between dark:text-white">
                  <div className="grid grid-cols-2 justify-between">
                    <span className="font-semibold">Heating</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                  <div className="grid grid-cols-2   justify-between">
                    <span className="font-semibold">Heating</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 justify-between dark:text-white">
                  <div className="grid grid-cols-2 justify-between">
                    <span className="font-semibold">Storage</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                  <div className="grid grid-cols-2   justify-between">
                    <span className="font-semibold">Storage</span>
                    <span>2 Years</span>
                    <hr className="w-[300px] my-5" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-semibold dark:text-white">
                  Amenities
                </h1>
                <hr className="h-[1px] bg-green-500 border-0 w-[80px] my-4" />

                <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1">
                  <div>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Air Conditioning
                    </h2>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Fireplace
                    </h2>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Furnished
                    </h2>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Horse
                    </h2>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      No HOA Fees
                    </h2>
                    <h2 className="dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Views
                    </h2>
                  </div>
                  <div>
                    <h2 className="my-3  dark:text-white ">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Basement
                    </h2>
                    <h2 className="my-3 dark:text-white ">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Fixer Upper
                    </h2>
                    <h2 className="my-3  dark:text-white ">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Garage
                    </h2>
                    <h2 className="my-3   dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Lease To Own
                    </h2>
                    <h2 className="my-3   dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Pool
                    </h2>
                  </div>
                  <div>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Deck
                    </h2>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Foreclosure
                    </h2>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Golf
                    </h2>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      New Construction
                    </h2>
                    <h2 className="my-3 dark:text-white">
                      <i className="fa-regular fa-circle-check text-orange-600 mx-3 dark:text-white"></i>
                      Short Sale
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* card  */}
            <div className="flex mx-auto justify-center lg:order-last order-first my-10 h-[680px]  p-10 border border-solid border-gray-300">
              <div className="items-center justify-center text-center">
                <img
                  src={profile}
                  alt="img"
                  className="mx-auto rounded-full h-[100px] w-[100px]"
                />
                <h1 className="text-xl font-bold my-5 dark:text-white">
                  Simon Wood
                </h1>
                <h1 className="text-[1px] text-gray-500 text-semibold">
                  Chief Marketing Officer
                </h1>

                <div className="my-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="h-[45px] w-[280px] p-5 bg-gray-200 mx-auto block"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="h-[45px] w-[280px] my-5 p-5 bg-gray-200 mx-auto block"
                  />
                  <input
                    type="number"
                    placeholder="Contact Us"
                    className="h-[45px] w-[280px] p-5 bg-gray-200 mx-auto block"
                  />
                  <textarea
                    rows="3"
                    cols="50"
                    name="comment"
                    form="usrform"
                    placeholder="Contact Us"
                    className="w-[280px] my-5 p-5 bg-gray-200 mx-auto block"
                  ></textarea>
                  <button className="bg-red-500 p-4 text-white font-bold opacity-85 mx-auto block">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stunning */}
      <div className="bg-gray-100 dark:bg-gulf-blue mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-5 px-5 sm:px-12 gap-5">
        <h1 className="font-bold text-5xl mt-10 dark:text-white">
          "Stunning Three-Bedroom Home with
        </h1>
        <h2 className="font-bold text-5xl dark:text-white">
          {" "}
          Spacious Backyard
        </h2>
        <div className="flex justify-center items-center mt-5">
          <iframe
            className="embedly-embed"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F4LaQFbfgvBI%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4LaQFbfgvBI&amp;image=https%3A%2Fi.ytimg.com%2Fvi%2F4LaQFbfgvBI%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
            width="1154"
            height="480"
            scrolling="no"
            title="YouTube embed"
            frameborder="0"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
      {/* Property Location */}

      <div className="max-w-[1320px]   mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-5 px-5 sm:px-12 gap-5 my-10">
        <section className="section ">
          <div className="secondary-container middle-allign">
            <h2 className="font-bold text-[40px] dark:text-white">
              Property Location: Your Gateway to Desirable Living
            </h2>
            <h2 className="font-bold text-[40px] dark:text-white">
              {" "}
              Desirable Living
            </h2>
            <div className="full-width-block">
              <div className="map w-embed w-iframe my-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.706555443365!2d90.42407563126513!3d23.81231704045232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c798efc8d88f%3A0x6e226eca564760c5!2sZeroGround!5e0!3m2!1sen!2sbd!4v1697095943077!5m2!1sen!2sbd"
                  width="100%"
                  height="490"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* question section  */}
      <div className="my-[80px]">
        <Question />
      </div>
    </>
  );
}

export default ProptyPage;
