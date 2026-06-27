import { TMDB_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;
  return (
    <div className="w-28 sm:w-36 md:w-44 lg:w-48 pr-2 md:pr-4">
      <img
        alt={title}
        src={TMDB_IMAGE_CDN + posterPath}
        className="w-full h-auto"
      />
    </div>
  );
};

export default MovieCard;
