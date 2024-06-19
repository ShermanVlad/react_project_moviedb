import {axiosInstance} from "../../axios/axios";
import {urls} from "../../constants/urls";
import {IMoviePaginated} from "../../models/IMoviePaginated";
import {AxiosError} from "axios";

const moviesService = {
    getMovies: async (page: number) => {
        try {
            const responce = await axiosInstance.get<IMoviePaginated>(urls.getAllMovies, {params: {page: page}});
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