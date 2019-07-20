export default (state = 'tab_1', action) =>{
    switch(action.type){
        case "Home":
            return action.payload        
        default:
            return state
    }
}