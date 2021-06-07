import { combineReducers } from "redux";
import { uireducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uireducer,
    //TODO: AuthReducer
    //TODO: CalendarReducer
})