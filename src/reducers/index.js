import {combineReducers} from 'redux'
// import pruebaReducer from './pruebaReducer'
// import homeReducer from './homeReducer'
import detalleReducer from './detalleReducer'
import sitioReducer from './sitioReducer'

// export default combineReducers({
//     homeReducer: homeReducer
// })

export default combineReducers({
    detalleReducer: detalleReducer,
    sitioReducer
}) 
