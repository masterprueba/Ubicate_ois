import React, {Component} from 'react'
import { Text, View, Button} from 'react-native'
import * as actions from './actions'
import {connect} from 'react-redux'

class Inicio extends Component{
static navigationOptions = {
    title: 'Inicio',
  };

  tab2(){
    this.props.prueba("ir a pantalla 2")
    this.props.navigation.navigate('inicial');        
  }

  
render(){
    console.log(this.props)
    return(
        <View>
            <Text>prueba</Text>
            <Button title={this.props.id} onPress={this.tab2.bind(this)}></Button>                
        </View>
    )
}
}

const mapStateToProps = state =>{
    return {id: state.pruebaid}
}

export default connect(mapStateToProps, actions)(Inicio)