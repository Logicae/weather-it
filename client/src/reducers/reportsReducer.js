// import initialState from './initialState'

export default function reportsReducer(state = [], action) {  
    switch(action.type) {
        case 'LOAD_REPORTS_SUCCESS':
            return action.reports
        case 'CREATE_REPORT_SUCCESS':
            return []
        default: 
            return state;
    }
}