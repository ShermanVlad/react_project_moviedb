import {IMovie} from "../../models/IMovie";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService/movies.api.service";
import {AxiosError} from "axios";
import {IGenre} from "../../models/IGenre";

type MoviesSliceType = {
    movies: IMovie[];
    currentPage: number;
    searchPage: null | number;
    isLoaded: boolean;
    total_pages: null | number
    genres: IGenre[]
}

const initialState: MoviesSliceType = {
    movies: [],
    currentPage: 1,
    searchPage: null,
    isLoaded: false,
    total_pages: null,
    genres: [],
}

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (page: number, thunkAPI) => {
        try {
            const response = await moviesService.getMovies(page);
            thunkAPI.dispatch(moviesActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(response?.data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        changeLoadState: (state, actions: PayloadAction<boolean>) => {
            state.isLoaded = actions.payload
        },
        changeCurrentPage: (state, actions: PayloadAction<number>)=>{
            state.searchPage=actions.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                if (action.payload) {
                    const {results, page, total_pages} = action.payload;
                    state.movies = results
                    state.currentPage = page
                    state.total_pages = total_pages
                    state.isLoaded = true
                }
            })
})

export const moviesActions = {
    ...moviesSlice.actions,
    getAllMovies
};