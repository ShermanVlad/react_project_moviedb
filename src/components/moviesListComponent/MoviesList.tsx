import React from 'react';
import {useAppSelector} from "../../redux/store";
import MovieComponent from "../movieComponent/MovieComponent";
import styles from './MoviesComponent.module.css'
const MoviesList = () => {

    let {movies, isLoaded}=useAppSelector(state => state.movieSlice)

    return (
        <div className={styles.mainDiv}>
            {
                isLoaded? movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>) : <div>loading ...</div>
            }
        </div>
    );
};

export default MoviesList;