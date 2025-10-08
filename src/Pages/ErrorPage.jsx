import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center min-h-screen gap-10 px-6 py-12">
        <img src={errorImg} alt="" />
        <div className="flex flex-col  md:justify-center items-start md:items-center gap-4">
          <p className="text-5xl font-semibold text-[#000000db]">
            Oops, page not found!
          </p>
          <p>The page you are looking for is not available.</p>
          <Link
            to="/"
            className=" py-3 px-5 rounded-sm cursor-pointer font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            Go Home!
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ErrorPage;
