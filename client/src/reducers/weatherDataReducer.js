export default (state = { routeName: 'home' }, action) => {
    switch(action.type) {
        case "CHANGING_ROUTE":
            return action.routeName;
        default: return state
    }
}