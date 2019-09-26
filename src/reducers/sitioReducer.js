const data = new Array()
data["id"]=""
data["title"]=""
data["url"]=""
export default (state = data, action) => {
    switch (action.type) {
        case "GET_SISTIOS":
            return action.payload        
        default:
            return state
    }
} 