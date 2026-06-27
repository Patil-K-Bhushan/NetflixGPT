import { TMDB_IMAGE_CDN } from "../utils/constants";


const MovieCard = ({posterPath, title}) => {
    if(!posterPath) return null;
    return(
        <div className="w-48 pr-4">
            <img alt={title} src={TMDB_IMAGE_CDN+posterPath}/>
        </div>
    );
}

export default MovieCard;