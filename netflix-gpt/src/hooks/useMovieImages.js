import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieLogo } from "../utils/movieSlice";

const useMovieImages = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieImages = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/images`,
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const json = await response.json();

        const logo =
          json.logos.find((l) => l.iso_639_1 === "en") ||
          json.logos.find((l) => l.iso_639_1 === "hi") ||
          json.logos[0] ||
          null;

        dispatch(addMovieLogo(logo));
      } catch (err) {
        console.error("Movie Images API Error:", err);
      }
    };

    getMovieImages();
  }, [movieId, dispatch]);
};

export default useMovieImages;
