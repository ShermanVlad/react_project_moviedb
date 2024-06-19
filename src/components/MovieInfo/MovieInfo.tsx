import React, {FC, useEffect} from 'react';
import {IMovie} from "../../models/IMovie";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useLocation, useParams} from "react-router";
import {genresActions} from "../../redux/slices/genresSlice";
import { Link } from 'react-router-dom';
import {Rating} from "@mui/material";

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
            vote_average,
            video
        }
    } = useLocation()

    const {genres} = useAppSelector(state => state.genresSlice)
    const dispatch = useAppDispatch()

    const posterBaseURL = `https://image.tmdb.org/t/p/w300${poster_path}`
    const backdropBaeURL = `https://image.tmdb.org/t/p/w300${backdrop_path}`

    useEffect(()=>{
        dispatch(genresActions.getAllGenres())
    },[])

    const findMovieGenre = (id: number)=>{
        const movieGanre = genres.find(genre=>genre.id===id)
        return movieGanre
    }

    return (
        <div>
            <div>
                <h4>{title}</h4>
            </div>

            <div>

                <div>
                    <img src={posterBaseURL} alt={title}/>
                    <div>
                        {/*{genre_ids?.map((id: number) => <Link key={id} to={`/movies/${id}`}>*/}
                        {/*    <div key={id}>{findMovieGenre(id) + ' '}</div>*/}
                        {/*</Link>)}*/}
                    </div>
                </div>

                <div>
                    <div>
                        <img src={backdropBaeURL} alt={title}/>
                    </div>

                    <Rating name="half-rating-read"
                            defaultValue={vote_average}
                            max={10}
                            size={'medium'}
                            precision={0.5} readOnly
                    /> {''} ({vote_average})

                    <h4>Description</h4>
                    <p>{overview}</p>

                    <h4>Release Date</h4>
                    <p>{release_date}</p>

                    <h4>Original Language</h4>
                    <p>{original_language.toUpperCase()}</p>

                </div>
            </div>

        </div>
    );
};

export default MovieInfo;