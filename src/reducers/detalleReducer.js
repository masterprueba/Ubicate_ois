export default (state = "DetalleSitio", action) => {
    switch (action.type) {
        case "DetalleSitio":
            return action.payload        
        default:
            return state
    }
} 