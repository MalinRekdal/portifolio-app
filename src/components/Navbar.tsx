import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/f_logo.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#edede9] text-gray-700">
      <div>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Heim
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            Om
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
           Ferdigheitar
          </Link>
        </li>
        <li>
          <Link to="interests" smooth={true} duration={500}>
           Faglege interessar
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Prosjekt
          </Link>
        </li>
        <li>
          <Link to="jobs" smooth={true} duration={500}>
          Tidlegare jobbar
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#22333b] flex flex-col justify-center items-center text-white"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="interests" smooth={true} duration={500}>
            Interests
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="jobs"
            smooth={true}
            duration={500}
          >
            Tidlegare jobbar
          </Link>
        </li>
      </ul>
    </div>
  );
};
