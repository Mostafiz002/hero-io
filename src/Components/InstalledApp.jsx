import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { removeFrominstalled } from "../utils/localStorage";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const InstalledApp = ({ app, setInstalledApps }) => {
  const handleUninstall = () => {
       Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, uninstall it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      customClass: {
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-cancel-btn",
        actions: "swal-actions",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        removeFrominstalled(app.id);
        setInstalledApps((prev) => prev.filter((a) => a.id !== app.id));
        Swal.fire({
          title: "Uninstalled!",
          text: "Your app has been uninstalled.",
          icon: "success",
          customClass: {
            confirmButton: "swal-confirm-btn",
            actions: "swal-actions",
          },
          buttonsStyling: false,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your app is safe :)",
          icon: "error",
          customClass: {
            confirmButton: "swal-confirm-btn",
            actions: "swal-actions",
          },
          buttonsStyling: false,
        });
      }
    });
  };
  return (
    <div className="w-full flex flex-col gap-6 md:gap-1 md:flex-row justify-between items-start md:items-center p-4 rounded-2xl text-[#090909] text-[18px] bg-[#e8e8e8] border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white">
      <div className="flex items-center gap-4">
        <figure>
          <img className="min-w-20 h-20 rounded-lg" src={app.image} alt="" />
        </figure>
        <div>
          <h3 className="mt-0 mb-3 md:my-4  text-base  font-medium text-[#001931]/80">
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
          className=" flex items-center gap-2 text-[#090909] py-[0.7em] px-[1.7em] text-[18px] rounded-md bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApp;
