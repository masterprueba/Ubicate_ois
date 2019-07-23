import React, {Component} from 'react'
import { Text, View, Button, Image,StyleSheet} from 'react-native'
import * as actions from '../actions'
import {connect} from 'react-redux'
import { MenuBase } from './MenuBase'


class Hotel extends Component{

    static navigationOptions = {
        title: `Hoteles`,
      };

      tab(){
        // this.props.prueba("ir a pantalla 1")
        // this.props.navigation.navigate('inicial');        
      }
    render(){

        let content =
            <Text>Hoteles</Text>

        let data = {
            title: 'Hoteles',
            content: content
        }

        return (
            <MenuBase data={data} navigation={this.props.navigation}></MenuBase>
            // <View>
            //     <Text>Hola</Text>
            // </View>
        )
    }
}

const mapStateToProps = state =>{
    return {id: state.pruebaid}
}

export default connect(mapStateToProps, actions)(Hotel)