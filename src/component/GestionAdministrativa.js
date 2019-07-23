import React, {Component} from 'react'
import { Text, View, Button, Image,StyleSheet} from 'react-native'
import * as actions from '../actions'
import {connect} from 'react-redux'
import { MenuBase } from './MenuBase'


class GestionAdministrativa extends Component{
    static navigationOptions = {
        title: 'Gestión Administrativa',
      };

      tab(){
        // this.props.prueba("ir a pantalla 1")
        // this.props.navigation.navigate('inicial');        
      }
    render(){
        let content =
            <Text>Gestión Administrativa</Text>

        let data = {
            title: 'Gestión Administrativa',
            content: content
        }

        return (
            <MenuBase data={data} navigation={this.props.navigation}></MenuBase>
        )
    }
}

const mapStateToProps = state =>{
    return {id: state.pruebaid}
}

export default connect(mapStateToProps, actions)(GestionAdministrativa)