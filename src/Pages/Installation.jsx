import React, { useEffect, useState } from "react";
import { loadinstalled } from "../utils/localStorage";
import InstalledApp from "../Components/InstalledApp";
import { Link } from "react-router";
import Loader from "../Components/Loader";
import { motion } from "framer-motion";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(() => loadinstalled());
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className=" inset-0 h-screen  relative -top-20 mb-40  flex items-center justify-center z-50">
        <Loader />
      </div>
    );
  }

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "price-desc") {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedApps;
    }
  })();

  return (
    <section className="py-20 px-6  max-w-[1448px] mx-auto">
      <motion.h2
        className="text-center text-2xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Your Installed Apps
      </motion.h2>
      <motion.p
        className="text-[#627382] text-[12px] md:text-base text-center w-full mt-4 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Explore All Trending Apps on the Market developed by us
      </motion.p>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          ({sortedItem.length}) App Installed
        </motion.p>
        <motion.select
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select bg-transparent"
        >
          <option value="none">Sort by download</option>
          <option value="price-asc">Low-&gt;High</option>
          <option value="price-desc">High-&gt;Low</option>
        </motion.select>
      </div>
      {sortedItem.length === 0 && (
        <div className="text-center flex flex-col items-center justify-center gap-6">
          <p className="text-center text-3xl mt-10">No apps found</p>
          <Link
            to="/apps"
            className=" py-3 px-10 rounded-sm cursor-pointer flex gap-2 items-center justify-center font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-all duration-300 hover:scale-103  hover:from-[#7438ed] hover:to-[#8c5dc9]"
          >
            All Apps
          </Link>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        className="flex flex-col gap-6"
      >
        {sortedItem.map((app) => (
          <InstalledApp
            key={app.id}
            setInstalledApps={setInstalledApps}
            app={app}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Installation;
