import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="p-4 rounded-2xl text-[#090909] text-[18px] bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white">
      <img
        className="h-[300px] w-full rounded-lg object-cover"
        src={app.image}
        alt=""
      />
      <h3 className="my-4 text-base  font-medium text-[#001931]/80">{app.title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 rounded-sm bg-[#F1F5E8] px-3 py-1.5">
          <img className="w-[14px]" src={downloadImg} alt="" />
          <p className="text-[#00D390] font-medium text-base">
            {app.downloads}M
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-sm bg-[#FFF0E1] px-3 py-1.5">
          <img className="w-[16px]" src={ratingImg} alt="" />
          <p className="text-[#FF8811] font-medium text-base">
            {app.ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
