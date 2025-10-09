import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadImg from "../assets/icon-downloads.png";
import reviewImg from "../assets/icon-review.png";
import ratingImg from "../assets/icon-ratings.png";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ToastContainer } from "react-toastify";
import { updateList } from "../utils/localStorage";
import Loader from "../Components/Loader";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [installed, setInstalled] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return (
      <div className=" inset-0 h-screen  relative -top-20 mb-40  flex items-center justify-center z-50">
        <Loader />
      </div>
    );
  }

  const app = apps.find((a) => a.id === Number(id));

  if (loading) return <p>Loading.......</p>;

  const handleInstall = (id) => {
    setInstalled(true);
    updateList(id);
  };

  return (
    <section className="py-20 px-6  max-w-[1448px] mx-auto">
      <div className="flex flex-col md:flex-row gap-10 pb-10 mb-10 border-b border-[#001931]/20">
        <figure className="w-full lg:max-w-[350px] flex items-center justify-center  ">
          <img
            className="md:w-[350px]  h-[350px] object-cover "
            src={app.image}
            alt=""
          />
        </figure>
        <div className="w-full">
          <h3 className="font-semibold text-3xl text-[#001931]/80">
            {app.title}
          </h3>
          <p className="mt-2 pb-8 text-[#627382] text-[12px] md:text-base border-b border-[#001931]/20 w-full">
            Developed by{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
              {app.companyName}
            </span>
          </p>
          <div className="flex flex-row gap-4 justify-between md:justify-start lg:gap-20 mt-8">
            <div>
              <img className="w-9 h-9" src={downloadImg} alt="" />
              <p className="text-[#001931] my-2">Downloads</p>
              <p className="text-[#001931] font-bold text-4xl">
                {app.downloads}M
              </p>
            </div>
            <div>
              <img className="w-9 h-9" src={ratingImg} alt="" />
              <p className="text-[#001931] my-2">Average Ratings</p>
              <p className="text-[#001931] font-bold text-4xl">
                {app.ratingAvg}
              </p>
            </div>
            <div>
              <img className="w-9 h-9" src={reviewImg} alt="" />
              <p className="text-[#001931] my-2">Total Reviews</p>
              <p className="text-[#001931] font-bold text-4xl">
                {app.reviews}K
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleInstall(app)}
              disabled={installed}
              className="mt-10 py-3 px-5 text-white bg-[#00D390] rounded-sm hover:bg-[#02c587] transition duration-300 ease-in-out cursor-pointer"
            >
              {installed ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="pb-10 mb-10 border-b border-[#001931]/20">
        <h5 className="mb-6 text-lg font-medium text-[#001931]/80">Ratings</h5>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              data={[...app.ratings].reverse()}
              margin={{ top: 20, bottom: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" barSize={30} fill="#6834e4" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h5 className="mb-6 text-lg  font-medium text-[#001931]/80">
          Description
        </h5>
        <p className="text-[#627382] text-[12px] md:text-base">
          {app.description}
        </p>
      </div>
    </section>
  );
};

export default AppDetails;
