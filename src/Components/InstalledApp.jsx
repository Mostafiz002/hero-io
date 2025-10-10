import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { removeFrominstalled } from "../utils/localStorage";
import { toast, ToastContainer } from "react-toastify";

const InstalledApp = ({ app, setInstalledApps }) => {
  const handleUninstall = () => {
    removeFrominstalled(app.id);
    setInstalledApps((prev) => prev.filter((a) => a.id !== app.id));
    toast.success('App Uninstalled Successfully 😔')
  };
  return (
    <div className="w-full flex flex-col gap-6 md:gap-1 md:flex-row justify-between items-start md:items-center p-4 rounded-2xl text-[#090909] text-[18px] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white">
      <div className="flex items-center gap-4">
        <figure>
          <img
            className="min-w-30 h-20 object-cover rounded-lg"
            src={app.image}
            alt=""
          />
        </figure>
        <div className=" ">
          <h3 className="mt-0 mb-3 md:mb-4  text-base  font-medium text-[#001931]/80">
            {app.title}
          </h3>
          <div className="flex items-center justify-start gap-3">
            <p className="flex items-center justify-start text-sm gap-1 text-[#00a26f] px-4 py-1 bg-[#00d39027] rounded-sm">
              <img className="w-3" src={downloadImg} alt="" /> {app.downloads}M
            </p>
            <p className="text-[#FF8811] flex gap-1 items-center justify-start text-sm px-4 py-1 bg-[#ff88113f] rounded-sm">
              <img className="w-3" src={ratingImg} alt="" />
              {app.ratingAvg}
            </p>
            <p className="text-sm text-[#627382]">{app.size} MB</p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleUninstall}
          className=" flex items-center gap-2 text-[#090909] py-[0.7em] px-[1.7em] text-[18px] rounded-md bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApp;
