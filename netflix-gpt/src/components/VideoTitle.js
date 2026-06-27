import React from "react";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { TMDB_IMAGE_CDN } from "../utils/constants";

const VideoTitle = ({ title, description }) => {
  const logo = useSelector((store) => store.movies.movieLogo);

  return (
    <div className="absolute w-full aspect-video bg-gradient-to-r from-black pt-[16%] sm:pt-[18%] lg:pt-[20%] px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      {logo ? (
        <img
          src={`${TMDB_IMAGE_CDN}${logo.file_path}`}
          alt={title}
          className="mb-4 md:mb-6 w-36 sm:w-52 md:w-72 lg:w-[450px] max-w-[80%]"
        />
      ) : (
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold">{title}</h1>
      )}

      <p className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 py-3 md:py-6 text-xs sm:text-sm md:text-base lg:text-lg break-words">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 md:gap-4">
        <button className="flex items-center gap-2 md:gap-3 rounded bg-white px-4 md:px-7 py-1.5 md:py-2.5 text-sm md:text-xl font-bold text-black hover:bg-gray-200 transition">
          <FaPlay size={18} />
          <span>Play</span>
        </button>

        <button className="flex items-center gap-2 rounded bg-white/30 px-4 md:px-8 py-1.5 md:py-3 text-sm md:text-base font-bold text-white backdrop-blur-md hover:bg-white/40 transition">
          <FiInfo size={24} />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
