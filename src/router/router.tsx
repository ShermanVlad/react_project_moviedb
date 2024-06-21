import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/moviesPage/MoviesPage";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import SearchedMoviesPage from "../pages/searchedMoviesPage/SearchedMoviesPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: 'movieInfo/:id', element: <MovieInfo/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: '/search/:value', element: <SearchedMoviesPage/>}
        ]
    }
])

export default router;
