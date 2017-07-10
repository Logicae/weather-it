import { combineReducers } from 'redux';
import reportsReducer from './reportsReducer'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    reportsReducer,
    form: formReducer 
})

export default reducers
