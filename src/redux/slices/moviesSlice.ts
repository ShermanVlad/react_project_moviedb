import {IMovie} from "../../models/IMovie";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService/movies.api.service";
import {AxiosError} from "axios";
import {IGenre} from "../../models/IGenre";
import {genresService} from "../../services/genresService/genres.api.service";

type MoviesSliceType = {
    movies: IMovie[];
    currentPage: number;
    searchPage: null | number;
    isLoaded: boolean;
    total_pages: null | number;
    genres: IGenre[];
    searchMovies: IMovie[] | null,
    currentSearchPage: number
}

const initialState: MoviesSliceType = {
    movies: [],
    currentPage: 1,
    searchPage: null,
    isLoaded: false,
    total_pages: null,
    genres: [],
    searchMovies: null,
    currentSearchPage: 1
}

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (page: number, thunkAPI) => {
        try {
            const response = await moviesService.getMovies(page);
            thunkAPI.dispatch(moviesActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

const getAllGenres = createAsyncThunk(
    'moviesSlice/getAllGenres',
    async (_, thunkApi) => {
        try {
            const responce = await genresService.getGenres();
            return thunkApi.fulfillWithValue(responce?.data)
        } catch (e) {
            const error = e as AxiosError;
            thunkApi.rejectWithValue(error.response?.data)
        }
    }
);

const searchedMovies = createAsyncThunk(
    'moviesSlice/searchedMovies',
    async ({value, currentSearchPage}: { value: string, currentSearchPage: number }, thunkAPI) => {
        try {
            const response = await moviesService.getSearchedMovies(value, currentSearchPage)
            console.log(response);
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error = e as AxiosError;
            thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);


const setSearchPage=createAsyncThunk(
    'moviesSlice/setSearchPage',
    async ()=>{

    }
)
export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        changeLoadState: (state, actions: PayloadAction<boolean>) => {
            state.isLoaded = actions.payload
        },
        changeCurrentPage: (state, actions: PayloadAction<number>) => {
            state.searchPage = actions.payload
        },
        changeSearchPage: (state, action:PayloadAction<number>) => {
            state.currentSearchPage = action.payload
        },
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
            .addCase(getAllGenres.fulfilled, (state, action) => {
                if (action.payload) {
                    const {genres} = action.payload
                    state.genres = genres
                }
            })
            .addCase(searchedMovies.fulfilled, (state, action) => {
                if (action.payload){
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
    getAllMovies,
    getAllGenres,
    searchedMovies
};