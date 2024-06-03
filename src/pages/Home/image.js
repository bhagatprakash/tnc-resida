import React from "react";
import image from "../../assest/images/image-1.png";
import image1 from "../../assest/images/image-2.png";
import image2 from "../../assest/images/image-3.png";
import image3 from "../../assest/images/image-4.png";
import image4 from "../../assest/images/image-5.png";
import image5 from "../../assest/images/image-6.png";
import image6 from "../../assest/images/image-7.png";

function ImageSection() {
  return (
    <div className="my-20">
      <div className="bg-accent/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative overflow-hidden flex justify-center">
            <img
              src={image3}
              alt="card"
              className="h-[400px] w-full object-cover  hover:scale-125 duration-1000"
              style={{ objectFit: "cover" }}
            />
            <p className="absolute right-5 bottom-5 text-white bg-opacity-75 p-2">
              Dream Town
            </p>
          </div>

          <div className="relative overflow-hidden flex justify-center">
            <img
              src={image5}
              alt="card"
              className="h-[400px] w-full object-cover  hover:scale-125 duration-1000"
              style={{ objectFit: "cover" }}
            />
            <p className="absolute right-5 bottom-5 text-white bg-opacity-75 p-2">
              Riverview Rida
            </p>
          </div>
          <div className="relative overflow-hidden flex justify-center">
            <img
              src={image4}
              alt="card"
              className="h-[400px] w-full object-cover  hover:scale-125 duration-1000"
              style={{ objectFit: "cover" }}
            />
            <p className="absolute right-5 bottom-5 text-white bg-opacity-75 p-2">
              Forest fast Carlifo
            </p>
          </div>
          <div className="relative overflow-hidden flex justify-center">
            <img
              src={image3}
              alt="card"
              className="h-[400px] w-full object-cover  hover:scale-125 duration-1000"
              style={{ objectFit: "cover" }}
            />
            <p className="absolute right-5 bottom-5 text-white bg-opacity-75 p-2">
              Luxury Realty
            </p>
          </div>
          <div className="relative overflow-hidden flex justify-center">
            <img
              src={image2}
              alt="card"
              className="h-[400px] w-full object-cover  hover:scale-125 duration-1000"
              style={{ objectFit: "cover" }}
            />
            <p className="absolute right-5 bottom-5 text-white bg-opacity-75 p-2">
              Forest fast Carlifo
            </p>
          </div>
          <div className="relative overflow-hidden flex justify-center">
            <img
              src={image6}
              alt="card"
              className="h-[400px] w-full object-cover  hover:scale-125 duration-1000"
              style={{ objectFit: "cover" }}
            />
            <p className="absolute right-5 bottom-5 text-white bg-opacity-75 p-2">
              Indigo
            </p>
          </div>
          <div className="relative overflow-hidden flex justify-center">
            <img
              src={image1}
              alt="card"
              className="h-[400px] w-full object-cover  hover:scale-125 duration-1000"
              style={{ objectFit: "cover" }}
            />
            <p className="absolute right-5 bottom-5 text-white bg-opacity-75 p-2">
              Star Island
            </p>
          </div>
          <div className="relative overflow-hidden justify-center">
            <img
              src={image}
              alt="card"
              className="h-[400px] w-full object-cover  hover:scale-125 duration-1000"
              style={{ objectFit: "cover" }}
            />
            <p className="absolute right-5 bottom-5  text-white bg-opacity-75 p-2">
              My Seattle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
