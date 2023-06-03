import axios from "axios";
import { AppDispatch } from "../store";
import { personSlice } from "../reducers/personSlice";
import { IPerson } from "../../types/types";


export const fetchPersons = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(personSlice.actions.personsFetching())
        const response = await axios.get<IPerson[]>('/PersonData.json')
        dispatch(personSlice.actions.personsFetchingSuccess(
            response.data
        ))
    } catch (e) {
        dispatch(personSlice.actions.personsFetchingError(e as Error))
    }
}