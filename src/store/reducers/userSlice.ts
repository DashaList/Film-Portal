import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";
import { AxiosError } from "axios";

export interface UserState {
    user: IUser;
    isAuth: boolean;
    loading: boolean;
    error: null | string;
}

const initialState: UserState = {
    user: {
        id: 0,
        email: '',
        isAdmin: false,
    },
    isAuth: false,
    loading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
            //state.user.token = action.payload.user.token,
            
            state.isAuth = true
            state.error = null
        },
        removeUser(state) {
            // state.user.id = 0,
            // state.user.email = '',
            // state.user.isAdmin = false,
            state = initialState,

            state.isAuth = false
            state.error = null

            console.log('pip', state)
        },
        setError(state,  action: PayloadAction<string>) {
            state.loading = false;
            if (action.payload === 'Unauthorized') {
                state.error = 'Пользователя не существует';
            } else state.error = action.payload;
            
            console.log(action.payload)
        }
    }
})

export default userSlice.reducer;