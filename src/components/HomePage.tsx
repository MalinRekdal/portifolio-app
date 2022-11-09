import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Portrait from "../assets/Bilde squared.png";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#edede9] grid grid-cols-1 sm:grid-cols-2 gap-1">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          Malin Rekdal
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#848794]">
          Student ved ELSYS
        </h2>
        <p className="text-[#848794] py-4 max-w-[700px]">
          Sjekk ut erfaring eg har, og prosjekt eg har gjort ved å sjå rundt på sida mi. 
        </p>
      <div>
        <Link to="projects" smooth={true} duration={500}>
            <button className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
              Sjekk ut mine prosjekt
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
          <img
            className="object-contain md:object-scale-down h-19 w-80 mb-200"
            src={Portrait}
            alt="Portrate"
          />
        </div>
    </div>
  );
};
