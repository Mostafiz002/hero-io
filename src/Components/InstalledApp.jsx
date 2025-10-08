import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { removeFrominstalled } from "../utils/localStorage";
import { toast, ToastContainer } from "react-toastify";

const InstalledApp = ({ app, setInstalledApps }) => {
  const handleUninstall = () => {
    toast.success("App Uninstalled Successfully 🥳");
    removeFrominstalled(app.id);
    setInstalledApps((prev) => prev.filter((a) => a.id !== app.id));
  };
  return (
    <div className="w-full flex justify-between items-center p-4 rounded-2xl text-[#090909] text-[18px] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white">
      <div className="flex items-center gap-4">
        <figure>
          <img className="w-20 h-20 rounded-lg" src={app.image} alt="" />
        </figure>
        <div>
          <h3 className="my-4 text-base  font-medium text-[#001931]/80">
            {app.title}
          </h3>
          <div className="flex items-center justify-start gap-3">
            <p className="flex items-center justify-start text-sm gap-1 text-[#00D390]">
              <img className="w-3" src={downloadImg} alt="" /> {app.downloads}M
            </p>
            <p className="text-[#FF8811] flex gap-1 items-center justify-start text-sm">
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
          className=" py-2 px-5 text-white bg-[#00D390] rounded-sm hover:bg-[#02c587] transition duration-300 ease-in-out cursor-pointer"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApp;
