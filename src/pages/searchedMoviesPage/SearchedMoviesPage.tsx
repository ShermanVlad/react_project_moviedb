import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesPage from "../moviesPage/MoviesPage";
import styles from "../moviesPage/MoviesPage.module.css";
import {Pagination} from "@mui/material";
import MoviesList from "../../components/MoviesList/MoviesList";

const SearchedMoviesPage = () => {
    const {value} = useParams()

    const dispatch = useAppDispatch()

    const {searchMovies, currentSearchPage, currentPage, total_pages} = useAppSelector(state => state.movieSlice)

    useEffect(() => {
        if (value) {
            dispatch(moviesActions.searchedMovies({value, currentSearchPage}))
        }
    }, [currentSearchPage])

    const reloadPage = (page: number) => {
        dispatch(moviesActions.changeSearchPage(page))
    }

    return (
        <div>
            <div className={styles.paginDiv}>
                <Pagination page={currentPage}
                            count={total_pages ? 500 : 1}
                            onChange={(_, page: number) => reloadPage(page)}
                            shape={"rounded"}
                            color={"primary"}
                />
            </div>

            {/*<div className={css.Search}>*/}
            {/*    {searchMovies.length < 1 ?*/}
            {/*        <img src="https://media.tenor.com/KOZLvzU0o4kAAAAC/no-results.gif"*/}
            {/*             alt="No Results Found" className={css.NoResults}/>*/}
            {/*        :*/}
            {/*        searchMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}*/}
            {/*</div>*/}
            <MoviesList></MoviesList>
            <div className={styles.paginDiv}>
                <Pagination page={currentPage}
                            count={total_pages ? 500 : 1}
                            onChange={(_, page: number) => reloadPage(page)}
                            shape={"rounded"}
                            color={"primary"}
                />
            </div>
        </div>
    );
};

export default SearchedMoviesPage;