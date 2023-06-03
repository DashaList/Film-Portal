import axios from "axios";
import { AppDispatch } from "../store";
import {filmSlice} from "../reducers/filmSlice";
import { IFilm } from "../../types/types";


export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.filmsFetching())
        const response = await axios.get<IFilm[]>('http://localhost:4998/movies')
        dispatch(filmSlice.actions.filmsFetchingSuccess(
            response.data
        ))
        console.log(response.data)
    } catch (e) {
        dispatch(filmSlice.actions.filmsFetchingError(e as Error))
    }
}

export const fetchFilm = (id: number) => async (dispatch: AppDispatch) => {
    try {
        //dispatch(filmSlice.actions.filmsFetching())
        const response = await axios.get<IFilm[]>(`http://localhost:4998/film/${id}`)
        dispatch(filmSlice.actions.filmsFetchingSuccess(
            response.data
        ))
        console.log(response.data)
    } catch (e) {
        //dispatch(filmSlice.actions.filmsFetchingError(e as Error))
        console.error
    }
}