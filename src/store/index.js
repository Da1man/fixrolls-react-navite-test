import { createStore } from "redux";
import rootReducer from '../reducers/rootReducer'
import cartScreenReducer from '../reducers/cartScreenReducer'
import catalogScreenReducer from '../reducers/catalogScreenReducer'

let store = createStore(cartScreenReducer);

export default store;