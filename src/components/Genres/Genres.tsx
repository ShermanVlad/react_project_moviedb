import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {genresActions, genresSlice} from "../../redux/slices/genresSlice";

const Genres = () => {

    const {genres}=useAppSelector(state => state.genresSlice)
    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(genresActions.getAllGenres())
    }, []);
    return (
        <div>
            {
                genres.map(genre=> <div>{genre.name}</div>)
            }
        </div>
    );
};

export default Genres;