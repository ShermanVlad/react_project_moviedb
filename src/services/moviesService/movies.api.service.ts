import {axiosInstance} from "../../axios/axios";
import {urls} from "../../constants/urls";
import {IMoviePaginated} from "../../models/IMoviePaginated";
import {AxiosError, AxiosResponse} from "axios";

const moviesService = {
    getMovies: async (page: number): Promise<IMoviePaginated | null> => {
        try {
            const {data} = await axiosInstance.get<IMoviePaginated>(urls.getAllMovies, {params: {page: page}});
            return data;
        } catch (e) {
            const error = e as AxiosError;
            if (error) {
                console.log('something wrong with getting movies');
            }
        }

        return null
    },
    getSearchedMovies: async (query: string, currentSearchPage: number): Promise<IMoviePaginated | null> => {
        console.log('moviesService VALUE: ', query);
        console.log('moviesService cSP: ', currentSearchPage);
        try {
            const response = await axiosInstance.get<IMoviePaginated>(urls.getSearchedMovies, {
                params: {
                    query,
                    currentSearchPage
                }
            })
            console.log('moviesService response', response);
            // return response
        } catch (e) {
            const error = e as AxiosError;
            if (error) {
                console.log('something wrong with getting movies you search', error)
            }
        }

        return null
    }
}
    export {
        moviesService
    }