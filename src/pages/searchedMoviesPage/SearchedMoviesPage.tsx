import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import styles from "../moviesPage/MoviesPage.module.css";
import {Pagination} from "@mui/material";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import Loading from "../../components/Loading/Loading";

const SearchedMoviesPage = () => {
    const {query}= useParams()

    const dispatch = useAppDispatch()

    const {
        searchMovies,
        currentSearchPage,
        total_pages
    } = useAppSelector(state => state.movieSlice)

    useEffect(() => {
        if (typeof query==="string") {
            console.log('searchedMoviesPage useEffect VALUE: ',query);
            console.log('searchedMoviesPage useEffect cSP: ',currentSearchPage);
            dispatch(moviesActions.searchedMovies({query, currentSearchPage}))
        }
    }, [currentSearchPage, query])

    const reloadPage = (page: number) => {
        dispatch(moviesActions.changeSearchPage(page))
    }

    return (
        <div>
            <div className={styles.paginDiv}>
                <Pagination page={currentSearchPage}
                            count={total_pages ? total_pages : 1}
                            onChange={(_, page: number) => reloadPage(page)}
                            shape={"rounded"}
                            color={"primary"}
                />
            </div>
            <div>
                {
                    searchMovies.length > 0 ? searchMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>) :
                        <Loading/>
                }
            </div>
            <div className={styles.paginDiv}>
                <Pagination page={currentSearchPage}
                            count={total_pages ? total_pages : 1}
                            onChange={(_, page: number) => reloadPage(page)}
                            shape={"rounded"}
                            color={"primary"}
                />
            </div>
        </div>
    )
        ;
};

export default SearchedMoviesPage;