import {IGenre} from "../../models/IGenre";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services/genresService/genres.api.service";
import {AxiosError} from "axios";

type GenresSliceType = {
    genres: IGenre[];
    selectedGenres: IGenre[];
}

const initialState: GenresSliceType={
    genres: [],
    selectedGenres: []
}

const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, thunkApi)=>{
        try {
            const responce = await genresService.getGenres();
            return thunkApi.fulfillWithValue(responce?.data)
        } catch (e) {
            const error = e as AxiosError;
            thunkApi.rejectWithValue(error?.request.data)
        }
    }
)

export const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action)=>{
                if (action.payload) {
                    const {genres}=action.payload
                    state.genres=genres
                }
            })
})

export const genresActions = {
    ...genresSlice.actions,
    getAllGenres
};