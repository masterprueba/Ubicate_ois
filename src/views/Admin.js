import React, { Component } from 'react'
import { Text, View, Button, Image, TouchableOpacity, TextInput,ScrollView,Alert } from 'react-native'
import styled from 'styled-components'
import logoInicio from '../resources/Image/logo-inicio.png'
import ic_menu from '../resources/Image/list.png'
import firebase from '../utli/Firesbase'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Header from '../component/menu_barra/header'


class Admin extends Component {

    static navigationOptions = ({ navigation }) => {

        let dataHeader = {
            titulo : 'Gestión Administrativa'
        }
        return {
            
            headerTitle:
                (                  
                    <Header dataHeader={dataHeader}/>
                ),
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#3B5998',
            },
            headerLeft: (
                <TouchableOpacity
                    onPress={(e) => { navigation.openDrawer() }}>
                    <Image style={{ tintColor: 'white', width: 30, marginLeft: 10 }} source={ic_menu} />
                </TouchableOpacity>
            ),
        };
    }

    render() {
        return(
            <View>
                <Text>Holaaaaaaaaaaaaaaaaaaaaaaaa</Text>
            </View>
        );
    }
}

// const mapStateToProps = state => {
//     return { correo: state.loginReducer }
// }

export default connect(null, actions)(Admin);