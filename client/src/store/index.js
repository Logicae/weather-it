import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import fetchingData from '../reducers/fetchingDataReducer'
import route from '../reducers/routeReducer'
import weatherData from '../reducers/weatherDataReducer'

const reducers = combineReducers ({
    fetchingData,
    route,
    weatherData
})

export default createStore(
    reducers,
    applyMiddleware(...middlewares)
)

const middlewares = [ thunk ]