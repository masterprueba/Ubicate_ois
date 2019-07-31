import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet, TextInput } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'
import styled from 'styled-components'
import logoInicio from '../resources/Image/logo-inicio.png'


class GestionAdministrativa extends Component {
    static navigationOptions = {
        title: 'Gestión Administrativa',
    };

    tab() {
        // this.props.prueba("ir a pantalla 1")
        // this.props.navigation.navigate('inicial');        
    }
    render() {

        const Container = styled.View`
        
        padding:10px 0 30px;
        justify-content:center;
        background-color:#f4f4f4; 
        margin-bottom:20px;       
        align-items:center`

        const Item = styled.View`            
            border:1px solid #ccc;
            margin:2px 0;
            border-radius:10px;
            box-shadow:0 0 10px #ccc;
            background-color:#fff;
            width:80%;  
            height:220;          
            padding:10px;`


        let content =
            <View>
                <Container style={{ backgroundColor: "#C5CAE9" }}>
                    <Item>
                        <Image source={logoInicio} style={{ height: "100%", width: "100%" }} />

                    </Item>
                </Container>
                <Container style={{ backgroundColor: "#C5CAE9" }}>
                    <Item >
                        <TextInput
                            style={styles.texto}
                            placeholder="Ingrese su usuario"
                            autoFocus
                        />
                        <TextInput
                            style={styles.texto}
                            placeholder="Ingrese su contraseña" 
                        />
                        <Button title={"Ingresar"} />
                    </Item>
                </Container>
            </View>

        let data = {
            title: 'Gestión Administrativa',
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

const styles = {
    header: {

    },
    cajaimg: {
        backgroundColor: "#9999",
        alignSelf: 'center',
        opacity: 8,
        position: "absolute",
        top: 180,
        height: 30,
        width: 250
    },
    texto: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
    },
    itemForm:{
        flexDirection: 'row'
    }
}

export default connect(null, actions)(GestionAdministrativa)