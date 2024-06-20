import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useLocation, useParams} from "react-router";
import {genresActions} from "../../redux/slices/genresSlice";
import styles from './MovieInfo.module.css'
import {Link} from 'react-router-dom';
import {Rating} from "@mui/material";
import GenreBadge from "../GenreBadge/GenreBadge";

const MovieInfo: FC = () => {

    const {
        state: {
            backdrop_path,
            genre_ids,
            original_language,
            overview,
            poster_path,
            release_date,
            title,
            vote_average
        }
    } = useLocation()

    const {genres} = useAppSelector(state => state.genresSlice)
    const dispatch = useAppDispatch()
    const posterBaseURL = `https://image.tmdb.org/t/p/w300${poster_path}`
    const backdropBaseURL = `https://image.tmdb.org/t/p/w300${backdrop_path}`

    useEffect(() => {
        dispatch(genresActions.getAllGenres())
    }, [])

    const findMovieGenre = (id: number) => {
        const movieGanre = genres.find(genre => genre.id === id)
        return movieGanre
    }

    return (
        <div className={styles.movieInfoMain}>
            <div className={styles.posterAndInfo}>
                <div className={styles.posterDiv}>
                    <img src={posterBaseURL} alt={title}/>
                </div>
                <div className={styles.infoDiv}>
                    <p>{title}</p>
                    <p><a href="https://www.imdb.com/">IMDb</a>: {vote_average}</p>
                    <p>Release date: {release_date}</p>
                    <p>Language: {original_language}</p>
                    <div className={styles.badgesDiv}>{
                        genre_ids?.map((id: number) => {
                            const genre = findMovieGenre(id);
                            return genre ? (
                                <Link key={id} to={`/movies/${id}`}>
                                    <div key={id} style={{marginLeft:"0.3vw"}}>{genre.name}</div>
                                </Link>
                            ) : null
                        })
                    }</div>
                    <p></p>
                    <p></p>
                </div>
            </div>

            <div>
                {
                    overview
                }
                <div>
                    <img src={backdropBaseURL} alt={title+'_backdrop'}/>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;