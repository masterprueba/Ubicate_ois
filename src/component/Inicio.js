import React, { Component } from 'react'
import { Text, View, Button, } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'
import { HeaderStyleInterpolator } from 'react-navigation';

class Inicio extends Component {


    constructor(props) {
        super(props)

        // this.state = {
        //     data: {}
        // }
    }

    static navigationOptions = {
        title: '¡Ubicate Ois!',
    };

    componentWillMount() {
        

        // this.setState(state => ({
        //     data: data
        // }));
    }

    componentDidMount() {

    }

    loadContent() {//Metodo propio de carga

    }

    tab2() {
        // this.props.prueba("ir a pantalla 2")
        // this.props.navigation.navigate('inicial');
    }


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