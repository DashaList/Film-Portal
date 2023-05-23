import { AppDispatch } from "../store";
import { toogleLanguage } from "../reducers/ToggleLanguage";


export const changeLanguage = () => (dispatch: AppDispatch) => {
    dispatch(toogleLanguage.actions.toogleLanguage())
}