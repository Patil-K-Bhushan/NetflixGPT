import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, language }) => {
  useMovieTrailer(movieId, language);

  const trailer = useSelector((state) => state.movies.trailerVideo);

  if (!trailer) return null;

  return (
    <div className="w-full aspect-video overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${trailer.key}&playsinline=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
