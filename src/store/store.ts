import { createStore } from "redux"
import { TypeState } from "../types/types"



const defState: TypeState = {
   deleteMode: false

}

export const storeReducer = (state = defState, action: any) => {
    switch (action.type) {
        case 'toggleDel': {
            console.log(!state.deleteMode)
            return { ...state, deleteMode: !state.deleteMode}
        }
        default:
            return state


    }

}

export const store = createStore(storeReducer)


