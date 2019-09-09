// export const Home = (id) => {
//     return{
//         type: "Home",
//         payload: id
//     }
// }
export const titleContent = (index) => {
    return{
        type:index,
        payload: index 
    }
}

export const actionDetSitio = (data) => {
    return{
        type:"DetalleSitio",
        payload: data
    }
}

export const actionLoginAdmin = (data,type) => {
    
    return{
        type:type,
        payload: data
    }
}