

export default (state = "", action) => {
    switch (action.type) {
        case "LOGIN_USER":
            console.log("action.type",action.type);
            return action.payload        
        default:
            return state
    }
} 