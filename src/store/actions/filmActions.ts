import axios from "axios";
import { AppDispatch } from "../store";
import {filmSlice} from "../reducers/filmSlice";
import { IFilm } from "../../types/types";


export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.filmsFetching())
        const response = await axios.get<IFilm[]>('/film.json')
        dispatch(filmSlice.actions.filmsFetchingSuccess(
            response.data
        ))
    } catch (e) {
        dispatch(filmSlice.actions.filmsFetchingError(e as Error))
    }
}