import { Facebook, Github, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <footer className="footer footer-horizontal footer-center text-gray-400 rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/apps" className="link link-hover">
            Apps
          </Link>
          <Link to="/installation" className="link link-hover">
            Installation
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              className="hover:scale-110 transition-transform hover:text-[#ffffffbd]"
              target="_blank"
              to="https://www.facebook.com/mahinmostafiz.m/"
            >
              <Facebook />
            </Link>
            <Link
              className="hover:scale-110 transition-transform hover:text-[#ffffffbd]"
              target="_blank"
              to="https://www.linkedin.com/in/mostafiz04"
            >
              <Linkedin />
            </Link>
            <Link
              className="hover:scale-110 transition-transform hover:text-[#ffffffbd]"
              target="_blank"
              to="https://github.com/Mostafiz002/"
            >
              <Github />
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Hero
            IO
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
