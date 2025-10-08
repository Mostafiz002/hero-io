import React from "react";
import Banner from "../Components/Banner";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const Home = () => {
  const { apps } = useApps();

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
            
            className="hidden py-3 px-8 rounded-sm cursor-pointer lg:flex gap-2 items-center justify-center font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition duration-300 ease-in-out hover:scale-103  hover:from-[#7438ed] hover:to-[#8c5dc9]"
          >
           <ArrowUpRight size={18} strokeWidth={1.85} /> Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
