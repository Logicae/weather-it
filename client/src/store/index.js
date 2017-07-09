import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//import reducers

const middlewares = [ thunk ]

const reducers = combineReducers({
    //insert reducers
})

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares),
)