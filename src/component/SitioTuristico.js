import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'


class SitioTuristico extends Component {
    static navigationOptions = {
        title: `Sitios Turisticos`,
    };

    tab() {
        // this.props.prueba("ir a pantalla 1")
        // this.props.navigation.navigate('inicial');        
    }
    render() {
        let content =
            <Text>Sitios Turistico</Text>

        let data = {
            title: 'Sitios Turistico',
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

export default connect(mapStateToProps, actions)(SitioTuristico)