import axios from "axios";
import { AppDispatch } from "../store";
import {filmSlice} from "../reducers/filmSlice";
import { IFilm, IFilter } from "../../types/types";


export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.filmsFetching())
         const response = await axios.get<IFilm[]>('http://localhost:4998/movies')
        dispatch(filmSlice.actions.filmsFetchingSuccess(
            response.data
        ))
        console.log('puk', response.data)
    } catch (e) {
        dispatch(filmSlice.actions.filmsFetchingError(e as Error))
    }
}

export const fetchFilteredFilms = ( filter: IFilter, genre?: string ) => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.filmsFetching())
        const url = genre? `http://localhost:4998/movies/${genre}` : 'http://localhost:4998/movies'
        const response = await axios.post<IFilm[]>(url, {
            filter
        })
        dispatch(filmSlice.actions.filmsFetchingSuccess(
            response.data
        ))
        console.log('puk', response.data)
    } catch (e) {
        dispatch(filmSlice.actions.filmsFetchingError(e as Error))
    }
}

export const fetchFilm = async (id: string, setFilm: (film: IFilm) => void) => {
    try {
        const response = await axios.get<IFilm>(`http://localhost:4998/film/${id}`)
        setFilm(response.data)
        console.log(response.data)
    } catch (e) {
        console.error
    }
}