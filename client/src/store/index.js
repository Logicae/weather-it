import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import fetchingData from '../reducers/fetchingDataReducer'
import route from '../reducers/routeReducer'
import weatherData from '../reducers/weatherDataReducer'

const middlewares = [ thunk ]

const reducers = combineReducers ({
    fetchingData,
    route,
    weatherData
})

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares),
)