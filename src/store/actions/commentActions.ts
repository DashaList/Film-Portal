import axios from "axios";
import { AppDispatch } from "../store";
import { IComment } from "../../types/types";
import { commentSlice } from "../reducers/commentSlice";


// export const fetchComments = () => async (dispatch: AppDispatch) => {
//     try {
//         //dispatch(commentSlice.actions.commentsFetching())
//         const response = await axios.get<IComment[]>('http://localhost:4998/film/145')
//         // dispatch(commentSlice.actions.commentsFetchingSuccess(
//         //     response.data
//         // ))
//         console.log(response.data)
//     } catch (e) {
//         dispatch(commentSlice.actions.commentsFetchingError(e as Error))
//     }
// }

export const postComment = (comment: IComment) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<Response>('http://localhost:4998/film/145', {
            userId: 5,
            userLogin: 'kaka@',
            text: 'bla bl bl'
        })

        // dispatch(userSlice.actions.setUser(
        //     response.data.user
        // ))

        console.log('response Comment', response.data)

    } catch (e) {
        console.error
    }
}