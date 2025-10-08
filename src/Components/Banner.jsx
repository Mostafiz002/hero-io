import React from "react";
import bannerImg from "../assets/hero.png";
import { Link } from "react-router";
import playstoreImg from "../assets/playstore.png";
import appstoreImg from "../assets/appstore.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col px-6">
        <motion.h1
          className="text-center mt-20 text-4xl md:text-7xl text-[#001931] font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We Build
          <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
            Productive{" "}
          </span>
          Apps
        </motion.h1>

        <motion.p
          className="text-[#627382] text-[12px] md:text-base text-center w-full lg:w-[850px] mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </motion.p>

        <motion.div
          className="my-10 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="https://play.google.com/store/"
            target="_blank"
            className="flex items-center gap-2 text-[#090909] py-[0.7em] px-[1.7em] text-[18px] rounded-md bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white"
          >
            <img className="w-6" src={playstoreImg} alt="" />
            Google Play
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            className="flex items-center gap-2 text-[#090909] py-[0.7em] px-[1.7em] text-[18px] rounded-md bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white"
          >
            <img className="w-6" src={appstoreImg} alt="" />
            App Store
          </Link>
        </motion.div>

        <motion.img
          src={bannerImg}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </div>
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] w-full text-white py-20 px-6">
        <h2 className="text-center text-2xl md:text-4xl font-semibold">
          Trusted by Millions, Built for You
        </h2>
        <div className="max-w-[900px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col justify-between items-center text-center rounded-2xl bg-[#ffffff1b] p-6">
            <p className="font-thin text-gray-300 text-base">Total Downloads</p>
            <p className="my-4 font-bold text-6xl">29.6M</p>
            <p className="font-thin text-gray-300 text-base">
              21% more than last month
            </p>
          </div>
          <div className="flex flex-col justify-between items-center text-center rounded-2xl bg-[#ffffff1b] p-6">
            <p className="font-thin text-gray-300 text-base">Total Reviews</p>
            <p className="my-4 text-6xl font-bold">906K</p>
            <p className="font-thin text-gray-300 text-base">
              46% more than last month
            </p>
          </div>
          <div className="flex flex-col justify-between items-center text-center rounded-2xl bg-[#ffffff1b] p-6">
            <p className="font-thin text-gray-300 text-base">Active Apps</p>
            <p className="my-4 font-bold text-6xl">132+</p>
            <p className="font-thin text-gray-300 text-base">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
