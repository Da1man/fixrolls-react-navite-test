import {combineReducers, createStore} from "redux";
import catalogScreenReducer from './catalogScreenReducer'
import cartScreenReducer from "./cartScreenReducer";

let rootReducer = combineReducers({
    catalogScreenReducer: catalogScreenReducer,
    cartScreenReducer: cartScreenReducer,
});

export default rootReducer;