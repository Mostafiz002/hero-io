import React from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { Github, Menu } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className="hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-clip-text hover:text-transparent border-b-2 border-transparent hover:border-b-2 hover:border-[#632EE3]"
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
    <div className="bg-[#e8e8e8] border-b border-gray-300 z-50">
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
          <div className="dropdown dropdown-left ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-0"
            >
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow  gap-2 -left-53 right-auto "
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
            className="hidden py-3 px-5 rounded-sm cursor-pointer lg:flex gap-2 items-center justify-center font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition duration-300 ease-in-out hover:scale-103  hover:from-[#7438ed] hover:to-[#8c5dc9] "
          >
            <svg
              width="20"
              height="20"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="github"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
            </svg>{" "}
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
