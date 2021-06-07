import { types } from "../types/types";

const initialState = {
    modalOpen: false
}

export const uireducer = ( state = initialState, action ) => {

    switch( action.type ){
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        default:
            return state;
    }

}