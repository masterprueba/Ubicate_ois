export default (state = new Array(), action) => {
    switch (action.type) {
        case "GET_SISTIOS":
            return action.payload        
        default:
            return state
    }
} 