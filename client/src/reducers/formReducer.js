export default function formReducer(state = [], action) {  
    switch(action.type) {
        case 'LOAD_REPORTS_SUCCESS':
            // {console.log(action.reports)}
            return action.reports
        // case 'CREATE_REPORT_SUCCESS':
        //     return []
        default: 
            return state
    }
}