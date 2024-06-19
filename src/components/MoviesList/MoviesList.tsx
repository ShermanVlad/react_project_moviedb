import {useAppSelector} from "../../redux/store";
import MovieListCard from "../MovieListCard/MovieListCard";
import styles from './MoviesList.module.css'
const MoviesList = () => {

    let {movies, isLoaded}=useAppSelector(state => state.movieSlice)

    return (
        <div className={styles.mainDiv}>
            {
                isLoaded? movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>) : <div>loading ...</div>
            }
        </div>
    );
};

export default MoviesList;