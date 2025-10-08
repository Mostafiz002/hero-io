import React from "react";
import { Link } from "react-router";
import appErrorImg from "../assets/App-Error.png";

const AppDetailsErrorPage = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center min-h-screen gap-10 px-6 py-12">
        <img src={appErrorImg} alt="" />
        <div className="flex flex-col  md:justify-center items-start md:items-center gap-4">
          <p className="text-5xl font-semibold text-[#000000db]">
            OPPS!! APP NOT FOUND
          </p>
          <p>
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to="/apps"
            className="transition duration-300 ease-in-out py-3 px-5 rounded-sm cursor-pointer font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppDetailsErrorPage;
