import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchingData from '../reducers/fetchingDataReducer'
import route from '../reducers/routeReducer'
import weatherData from '../reducers/weatherDataReducer'

export default createStore(
    fetchingData,
    route,
    applyMiddleware(...middlewares)
)

const middlewares = [ thunk ]