import React from "react";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { TMDB_IMAGE_CDN } from "../utils/constants";

const VideoTitle = ({ title, description }) => {
  const logo = useSelector((store) => store.movies.movieLogo);

  return (
    <div className="absolute w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-24 text-white">
      {logo ? (
        <img
          src={`${TMDB_IMAGE_CDN}${logo.file_path}`}
          alt={title}
          className="mb-6 w-[450px]"
        />
      ) : (
        <h1 className="text-6xl font-bold">{title}</h1>
      )}

      <p className="w-1/4 py-6 text-lg">{description}</p>

      <div className="flex gap-4">
        <button className="flex items-center gap-3 rounded bg-white px-7 py-2.5 text-xl font-bold text-black hover:bg-gray-200 transition">
          <FaPlay size={18} />
          <span>Play</span>
        </button>

        <button className="flex items-center gap-2 rounded bg-white/30 px-8 py-3 font-bold text-white backdrop-blur-md hover:bg-white/40 transition">
          <FiInfo size={24} />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
