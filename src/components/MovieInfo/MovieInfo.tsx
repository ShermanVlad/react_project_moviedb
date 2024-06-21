import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useLocation, useParams} from "react-router";
import styles from './MovieInfo.module.css'
import {Link} from 'react-router-dom';
import StarsRating from "../StarsRating/StarsRating";
import {moviesActions} from "../../redux/slices/moviesSlice";

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

    const {genres} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    const posterBaseURL = `https://image.tmdb.org/t/p/w300${poster_path}`
    const backdropBaseURL = `https://image.tmdb.org/t/p/w300${backdrop_path}`

    useEffect(() => {
        dispatch(moviesActions.getAllGenres())
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
                    <h3>{title}</h3>
                    <div style={{display: 'flex'}}>
                        <StarsRating rating={+vote_average.toFixed(1)}/>{vote_average.toFixed(1)}
                    </div>
                    <div className={styles.badgesDiv}>{
                        genre_ids?.map((id: number) => {
                            const genre = findMovieGenre(id);
                            return genre ? (
                                <Link key={id} to={`/movies/${id}`} className={styles.link}>
                                    <div key={id} style={{marginRight: "0.3vw"}}>{genre.name}</div>
                                </Link>
                            ) : null
                        })
                    }</div>

                    <p><b>Release date: </b>{release_date}</p>
                    <p><b>Language: </b> {original_language.toUpperCase()}</p>
                </div>
            </div>

            <div className={styles.overviewAndImg}>
                <div className={styles.overviewDiv}>
                    {/*<h3>Film `{title}` is about:</h3>*/}
                    <p>{overview}</p>
                </div>
                <div className={styles.backdropDiv}>
                    <img src={backdropBaseURL} alt={title + '_backdrop'}/>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;