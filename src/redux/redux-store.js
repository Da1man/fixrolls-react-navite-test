import {combineReducers, createStore} from "redux";

import cartScreenReducer from './cartScreen-reducer'
import catalogScreenReducer from "./catalogScreen-reducer";

let rootReducer = combineReducers({
    catalogScreenReducer,
    cartScreenReducer,
});

let store = createStore(rootReducer);

export default store;