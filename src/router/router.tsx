import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/moviesPage/MoviesPage";
import MovieInfoPage from "../pages/movieInfoPage/MovieInfoPage";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            // { path: 'aaaa', element: <MovieInfoPage/>}
        ]}
])

export default router;
