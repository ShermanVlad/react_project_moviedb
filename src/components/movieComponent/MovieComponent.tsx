import React, {FC} from 'react';
import {IMovie} from "../../models/IMovie";
import styles from './MovieComponent.module.css'

type IProps = {
    movie: IMovie;
}

const MovieComponent: FC<IProps> = ({movie}) => {

    const posterBaseURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    const posterAnotherURL = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`

    return (
        <div className={styles.movieDiv}>
            <img src={posterBaseURL} alt={movie.title}/>
            <h3>{movie.title}</h3>
            {/*<img src={posterAnotherURL} alt={movie.title}/>*/}
        </div>
    );
};

export default MovieComponent;