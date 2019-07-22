import React, {Component} from 'react'
import { Text, View, Button, Image,StyleSheet} from 'react-native'
import * as actions from '../actions'
import {connect} from 'react-redux'


class SitioTuristico extends Component{
    static navigationOptions = {
        title: `Sitios Turisticos`,
      };

      tab(){
        this.props.prueba("ir a pantalla 1")
        this.props.navigation.navigate('inicial');        
      }
    render(){
        console.log(this.props)
        return(
            <View>
                <Text>prueba</Text>
                <Button title={this.props.id} onPress={this.tab.bind(this)}></Button>                             
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return {id: state.pruebaid}
}

export default connect(mapStateToProps, actions)(SitioTuristico)