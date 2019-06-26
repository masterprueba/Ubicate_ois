export default (state = 'tab_1', action) =>{
    switch(action.type){
        case "prueba":
            return action.payload        
        default:
            return state
    }
}