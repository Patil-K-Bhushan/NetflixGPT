import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useMovieImages from "../hooks/useMovieImages";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  const mainMovie = movies?.[0];

  const movieId = mainMovie?.id;

  useMovieImages(movieId);

  if (!mainMovie) {
    return <h1>Loading...</h1>;
  }

  const { original_title, overview, id, original_language } = mainMovie;

  return (
    <>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} language={original_language} />
    </>
  );
};

export default MainContainer;
