// export default (state = 'tab_1', action) =>{
//     switch(action.type){
//         case "Home":
//             return action.payload        
//         default:
//             return state
//     }
// }
export default (state = "Inicio", action) => {
    switch (action.type) {
        case 1:
            return "Inicio"
        case 2:
            return "Favoritos"
        default:
            return state
    }
}