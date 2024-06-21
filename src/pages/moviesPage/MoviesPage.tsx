import {useAppDispatch, useAppSelector} from "../../redux/store";
import React, {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesList from "../../components/MoviesList/MoviesList";
import {Pagination} from "@mui/material";
import styles from './MoviesPage.module.css'

const MoviesPage = () => {

    const {currentPage, searchPage, movies, total_pages} = useAppSelector(state => state.movieSlice)

    let dispatch = useAppDispatch()

    const reloadPage = (page: number) => {
        dispatch(moviesActions.changeCurrentPage(page))
    }

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(searchPage || 1))
    }, [searchPage]);
    return (
        <div className={styles.MoviesPageDiv}>
            <div className={styles.paginDiv}>
                <Pagination page={currentPage}
                            count={total_pages ? 500 : 1}
                            onChange={(_, page: number) => reloadPage(page)}
                            shape={"rounded"}
                            color={"primary"}
                />
            </div>
            <MoviesList/>
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

export default MoviesPage;