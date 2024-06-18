import React, {FC} from 'react';
import {IMovie} from "../../models/IMovie";
import styles from './MovieListCard.module.css'
import PosterPreview from "../PosterPreview/PosterPreview";
import {Link} from "@mui/material";

type IProps = {
    movie: IMovie;
}

const MovieListCard: FC<IProps> = ({movie}) => {

    const {id, poster_path,title, release_date, vote_average}=movie

    return (
        <div className={styles.movieDiv}>
            {/*<Link to={`/movieInfo/${id}`}>*/}
                <PosterPreview posterPath={poster_path} movieTitle={title}/>
                <h3>{title}</h3>
                <div className={styles.descDiv}>
                    <p>{release_date}, IMDb: <b>{vote_average.toFixed(1)}</b></p>
                    <img src="/star-96.png" alt="star"/>
                </div>
            {/*</Link>*/}
        </div>
);
};

export default MovieListCard;