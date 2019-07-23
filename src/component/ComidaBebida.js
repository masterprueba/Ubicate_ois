import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'

class ComidaBebida extends Component {
    static navigationOptions = {
        title: `Comidas y Bebidas`,
    };

    tab() {
        // this.props.prueba("ir a pantalla 1")
        // this.props.navigation.navigate('inicial');        
    }
    render() {
        let content =
            <Text>Comidas y Bebidas</Text>

        let data = {
            title: 'Comidas y Bebidas',
            content: content
        }

        return (
            <MenuBase data={data} navigation={this.props.navigation}></MenuBase>
        )
    }
}

const mapStateToProps = state => {
    return { id: state.pruebaid }
}

export default connect(mapStateToProps, actions)(ComidaBebida)