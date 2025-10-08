import React from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { Github, Menu } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className=" hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent border-b-2 border-transparent hover:border-b-2 hover:border-[#632EE3]"
      >
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className="hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent border-b-2 border-transparent hover:border-b-2 hover:border-[#632EE3]"
      >
        Apps
      </NavLink>
      <NavLink
        to="/installation"
        className="hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent border-b-2 border-transparent hover:border-b-2 hover:border-[#632EE3]"
      >
        Installation
      </NavLink>
    </>
  );

  return (
    <div className="bg-[#e8e8e8] border-b border-gray-300">
      <div className="navbar py-4 bg-[#e8e8e8]  px-6  max-w-[1448px] mx-auto">
        <div className="navbar-start">
          <Link
            to="/"
            className="text-base flex gap-1 items-center font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          >
            <img className="w-8" src={logoImg} alt="" />
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-1 text-black ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-left dropdown-bottom ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-0"
            >
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  gap-2 -left-45 right-auto"
            >
              {links}
              <Link
                to="https://github.com/Mostafiz002/"
                target="_blank"
                className="flex py-3 px-5 rounded-sm cursor-pointer lg:hidden gap-2 items-center justify-center font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
              >
                <Github size={18} strokeWidth={2.5} /> Contribute
              </Link>
            </ul>
          </div>
          <Link
            to="https://github.com/Mostafiz002/"
            target="_blank"
            className="hidden py-3 px-5 rounded-sm cursor-pointer lg:flex gap-2 items-center justify-center font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-all duration-300 hover:scale-103  hover:from-[#7438ed] hover:to-[#8c5dc9]"
          >
            <Github size={16} strokeWidth={2.5} /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
