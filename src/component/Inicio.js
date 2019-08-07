import React, { Component } from 'react'
import { Text, View, Button, } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'

class Inicio extends Component {


    static navigationOptions = {
        title: '¡Ubicate Ois!',
    };


    render() {


          let content =
          <Text>Inicio</Text>

        let data = {
            title: 'Inicio',
            content: content
        }


        return (
             <MenuBase data={data} navigation={this.props.navigation}></MenuBase>
          
        )
    }
}


// const mapStateToProps = state =>{
//     return {id: state.pruebaid}
// }

export default connect(null, actions)(Inicio)