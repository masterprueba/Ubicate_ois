

export default (state = "", action) => {
    switch (action.type) {
        case "LoginAdmin":            
            return action.payload      
        default:
            return state
    }
} 