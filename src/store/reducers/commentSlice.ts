import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../../types/types"

interface CommentState {
    comments: IComment[];  
    loading: boolean;
    error: null | string;
}

const initialState: CommentState = {
    comments: [],
    loading: false,
    error: null,
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        commentsFetching(state) {
            state.loading = true;
        },

        commentsFetchingSuccess(state, action: PayloadAction<IComment[]>) {
            state.loading = false;
            state.error = '';
            state.comments = action.payload;
        },

        commentsFetchingError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = "Не удалось загрузить ";
        },
    }
})

export default commentSlice.reducer;