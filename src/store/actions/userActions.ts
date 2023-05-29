import axios from "axios";
import { AppDispatch } from "../store";
import { UserState, userSlice } from "../reducers/userSlice";


export const register = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<UserState>('/register', {email, password})

        dispatch(userSlice.actions.setUser(
            response.data
        ))

    } catch (e) {
        console.error
    }
}

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<UserState>('/login', {email, password})

        dispatch(userSlice.actions.setUser(
            response.data
        ))

    } catch (e) {
        console.error
    }
}