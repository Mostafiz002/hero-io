import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
    const {apps} = useApps()
  return (
    <div className="py-20 px-6  max-w-[1448px] mx-auto">
      <h2 className="text-center text-2xl md:text-4xl font-semibold">
        Our All Applications
      </h2>
      <p className="text-[#627382] text-[12px] md:text-base text-center w-full mt-4 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex items-center justify-between mb-6">
        <p>(132) Apps Found</p>
        <label className="input bg-transparent">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map(app => <AppCard key={app.id} app={app}></AppCard>)}
      </div>
    </div>
  );
};

export default Apps;
