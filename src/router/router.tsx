import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/moviesPage/MoviesPage";
import MovieInfo from "../components/MovieInfo/MovieInfo";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: 'movieInfo/:id', element: <MovieInfo/>, children: [
                    {path: ':genreId', element: <MoviesPage/>}
                ]}
        ]}
])

export default router;
