import axios from "axios";
import { AppDispatch } from "../store";
import { filmSlice } from "../reducers/filmSlice";
import { IFilm } from "../../types/types";


export const fetchFilms = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(filmSlice.actions.filmsFetching())
        const response = await axios.post('http://localhost:4998/movies/drama', {
            pageIndex: 0,
            year: 1995,
            rating: 7.2,
            marks: 100000,
            country: 'США',
            actors: 'Питт',
            directors: '',
        })
        dispatch(filmSlice.actions.filmsFetchingSuccess(
            response.data.movies
        ))
        console.log(response.data)
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