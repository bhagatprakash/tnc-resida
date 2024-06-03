import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: "TNC Resida has made my home search a breeze. Their platform is user-friendly,  perfect place with ease  find our dream home quickly and efficiently.",
    author: "Sarah Thompson",
    position: "CEO at Homeland",
    rating: 5,
  },
  {
    text: "TNC Resida has been a game-changer in our home-buying journey  Their platform is user-friendly. They helped us find our dream home quickly and efficiently.",
    author: "Sarah Thompson",
    position: "CEO at Homeland",
    rating: 5,
  },
  {
    text: "As a first-time homebuyer, I was overwhelmed, but TNC Resida guided me every step of the way. Their commitment to client satisfaction is truly exceptional.",
    author: "Leslie Alexander",
    position: "CEO at Homeland",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="slick-prev bg-green-500 text-red-500 p-2 rounded-full shadow-md ">
        ←
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-red-500 text-green-500 p-2 rounded-full shadow-md">
        →
      </button>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
    ),
  };

  return (
    <div className="my-20">
      <div className="bg-accent/20 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
        <div className="p-10">
          <h2 className="text-4xl  text-left font-bold mb-6 sm:mb-8">
            What Our Client Says
          </h2>
          <p className="text-[18px] text-gray-500 text-left">
            TNC Resida has made my home search a breeze. Their platform is
            user-friendly, and I found the perfect place with ease.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="p-4 sm:p-6 bg-white border border-gray-500 text-center">
                <p className="text-base sm:text-lg text-left italic mb-2 sm:mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex text-left mb-2 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.275 3.94a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.275 3.94c.3.921-.755 1.688-1.538 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.783.57-1.838-.197-1.538-1.118l1.275-3.94a1 1 0 00-.364-1.118l-3.375-2.45c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.275-3.94z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg sm:text-[15px] text-left font-semibold">
                  {testimonial.author}
                </h3>
                <p className="text-gray-600 [13px] text-left">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
