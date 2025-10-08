import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import Loader from "../Components/Loader";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className=" inset-0 h-screen fixed -top-20   flex items-center justify-center z-50">
        <Loader />
      </div>
    );
  }
  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="py-20 px-6  max-w-[1448px] mx-auto">
      <h2 className="text-center text-2xl md:text-4xl font-semibold">
        Our All Applications
      </h2>
      <p className="text-[#627382] text-[12px] md:text-base text-center w-full mt-4 mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex items-center justify-between mb-6">
        <p>({searchedProducts.length}) Apps Found</p>
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
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>
      {searchedProducts.length === 0 && (
        <div className="text-center flex flex-col items-center justify-center gap-6">
          <p className="text-center text-3xl mt-10">No apps found</p>
          <button
            onClick={() => setSearch("")}
            className="hidden py-3 px-10 rounded-sm cursor-pointer lg:flex gap-2 items-center justify-center font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-all duration-300 hover:scale-103  hover:from-[#7438ed] hover:to-[#8c5dc9]"
          >
            Show All Apps
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {searchedProducts.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
