import {useAppDispatch, useAppSelector} from "../../redux/store";
import React, {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MoviesList from "../../components/moviesListComponent/MoviesList";
import {Pagination} from "@mui/material";

const MoviesPage = () => {

    const {currentPage, searchPage, movies, total_pages, isLoaded} = useAppSelector(state => state.movieSlice)

    let dispatch = useAppDispatch()

    const changePage = (page: number) => {
        dispatch(moviesActions.changeCurrentPage(page))
    }

    useEffect(() => {
        dispatch(moviesActions.getAllMovies(searchPage || 1))
    }, [searchPage]);
    return (
        <div>
            <Pagination page={currentPage}
                        count={total_pages ? total_pages : 1}
                        onChange={(_, page: number) => changePage(page)}
                        shape={"rounded"}
                        color={"primary"}
            />
            <MoviesList/>
            <Pagination page={currentPage}
                        count={total_pages ? total_pages : 1}
                        onChange={(_, page: number) => changePage(page)}
                        shape={"rounded"}
                        color={"primary"}
            />
        </div>
    );
};

export default MoviesPage;