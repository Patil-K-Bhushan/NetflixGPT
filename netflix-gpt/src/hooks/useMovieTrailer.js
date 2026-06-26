import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId, language) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=${language || "en-US"}`,
          API_OPTIONS,
        );

        const jsonData = await response.json();

        const trailer =
          jsonData.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          ) || jsonData.results.find((video) => video.site === "YouTube");

        dispatch(addTrailerVideo(trailer));
      } catch (err) {
        console.error(err);
      }
    };

    getMovieVideos();
  }, [movieId, language, dispatch]);
};

export default useMovieTrailer;
