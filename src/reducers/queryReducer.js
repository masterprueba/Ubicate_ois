export default (state = "data", action) => {
    switch (action.type) {        
        case "GET_QUERY":
            return action.payload      
        default:
            return state
    }
} 