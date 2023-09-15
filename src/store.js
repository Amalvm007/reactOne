import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {homeReducer} from './reducers/homeReducers'

const reducer = combineReducers({
    hotelReducer:homeReducer

})

const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

export default store