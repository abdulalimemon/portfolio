import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-base-100 h-[100vh]">
      <div className="container mx-auto h-full">
        <div className="py-20 md:py-28 lg:py-32 flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-sm text-neutral">Hi there, I'm </p>
            <h2 className="text-4xl md:text-6xl font-bold pb-5 pt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD38] to-[#aca6a6]">
              Abdul Alim Emon
            </h2>
            <h3 className="text-2xl md:text-4xl pb-5">
              Passionate MERN Stack Developer
            </h3>
            <div className="w-10/12 md:w-8/12 xl:w-6/12 mx-auto pb-10">
              <p>
                I'm on a mission to create seamless and remarkable web
                experiences. With a strong foundation in MERN (MongoDB, Express,
                React, Node.js) stack development, I bring your concepts to life
                and turn them into user-friendly, cutting-edge web applications.
              </p>
            </div>
            <Link to="/contact">
              <button className="btn btn-outline btn-secondary normal-case text-sm btn-lg px-20">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
