// import initialState from './initialState'

export default function reportsReducer(state = [], action) {  
    switch(action.type) {
        case 'LOAD_REPORTS_SUCCESS':
            // {console.log(action.reports)}
            return action.reports
        // case 'CREATE_REPORT_SUCCESS':
        //     return []
        case 'persist/REHYDRATE':
            return {...state, persistedState: action.payload}
        default: 
            return state
    }
}