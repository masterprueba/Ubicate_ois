export default (state = "Inicio", action) =>{
    switch(action.index){
        case 1:
            return "Inicio"       
        default:
            return state
    }
}