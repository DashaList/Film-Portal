import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    email: string | null;
    token: string | null;
}

const initialState: UserState = {
    email: null,
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.email = action.payload.email,
            state.token = action.payload.token
        },
        removeUser(state) {
            state.email = null,
            state.token = null
        }
    }
})

export default userSlice.reducer;