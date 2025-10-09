import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import Loader from "../Components/Loader";

const Home = () => {
  const { apps } = useApps();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className=" inset-0 h-screen relative -top-20 mb-40 flex items-center justify-center z-10">
        <Loader />
      </div>
    );
  }

  const trendingApps = apps.slice(0, 8);

  return (
    <div>
      <Banner />
      <div className="py-20 flex flex-col justify-center items-center px-6  max-w-[1448px] mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-semibold">
          Trending Apps
        </h2>
        <p className="text-[#627382] text-[12px] md:text-base text-center w-full mt-4 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/apps"
            className="mt-4 flex items-center gap-2 text-[#090909] py-[0.7em] px-[1.7em] text-sm md:text-[18px] rounded-md bg-[#e8e8e8] cursor-pointer border border-[#e8e8e8] transition-all duration-300 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:border-white"
          >
            <ArrowUpRight size={18} strokeWidth={1.85} /> Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
