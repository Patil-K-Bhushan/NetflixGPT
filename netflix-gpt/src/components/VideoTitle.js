import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{description}</p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-white text-black font-semibold p-3 px-8 text-lg rounded shadow hover:bg-gray-200 transition">
          <FaPlay className="text-base" />
          <span>Play</span>
        </button>
        <button className="flex items-center gap-2 bg-gray-500/70 text-white font-semibold p-3 px-8 text-lg rounded shadow backdrop-blur-sm hover:bg-gray-600 transition">
          <FiInfo className="text-base" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
