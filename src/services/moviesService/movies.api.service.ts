import {axiosInstance} from "../../axios/axios";
import {urls} from "../../constants/urls";
import {IMoviePaginated} from "../../models/IMoviePaginated";
import {AxiosError, AxiosResponse} from "axios";
import {IMovie} from "../../models/IMovie";

const moviesService = {
    getMovies: async (page: number) => {
        try {
            const responce = axiosInstance.get<IMoviePaginated>(urls.getAllMovies, {params: {page: page}});
            return responce;
        } catch (e){
            const error = e as AxiosError;
            if (error) {
                console.log('something wrong with getting movies');
            }
        }
    }
}

export {
    moviesService
}