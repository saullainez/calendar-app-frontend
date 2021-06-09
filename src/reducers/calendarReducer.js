import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'Cumpleaños',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar el pastel',
        user: {
            _id: 'ABC',
            name: 'Saul'
        }
    }],
    activeEvent: null
}

export const calendarReducer = ( state = initialState, action ) => {

    switch ( action.type ){

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventUpdate:
            console.log(state.events[0].id === action.payload.id)
            console.log(action.payload)
            return {
                ...state,
                events: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }


        default:
            return state;
    }

}