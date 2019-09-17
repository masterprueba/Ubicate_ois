import React, { Component } from 'react'
import { Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import styled from 'styled-components'
import logoInicio from '../resources/Image/logo-inicio.png'
import ic_menu from '../resources/Image/list.png'
import firebase from '../utli/Firesbase'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Header from '../component/menu_barra/header'



class GestionAdministrativa extends Component {

    constructor(props) {
        super(props);
        this.state = { textEmail: '', password: '' };
        console.log("Props gestionAdmin:: ", this.props);
        if (this.props.correo && Object.keys(this.props.correo).length != 0) {

            console.log("Correo logueado");
            this.props.navigation.navigate("admin",
                {
                    userEmail: this.props.correo
                });
        } else {
            console.log("Correo No Existe msn constructor ");
        }
    }

    componentWillMount() {


    }



    static navigationOptions = ({ navigation }) => {

        let dataHeader = {
            titulo: 'Gestión Administrativa'
        }
        return {

            headerTitle:
                (
                    <Header dataHeader={dataHeader} />
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

    tab(e) {

        let errorCode;
        let errorMessage;

        firebase.auth().signInWithEmailAndPassword(this.state.textEmail, this.state.password)
            .then((data) => {

                // console.log("data_:::::",data);  
                this.props.actionLoginAdmin(this.state.textEmail,"LoginAdmin");
                console.log("auth_this.props:::::",this.props);  
                this.props.navigation.navigate("admin",
                    {
                        userEmail: this.state.textEmail
                    });

            })
            .catch(function (error) {
                // Handle Errors here.
                errorCode = error.code;
                errorMessage = error.message;

                console.log("errorCode::: ", errorCode);
                console.log("errorMessage::: ", errorMessage);

                Alert.alert(errorCode, errorMessage);

            });

        // firebase.auth().onAuthStateChanged( (user) => {
        //     if (user) {
        //       // User is signed in.
        //       console.log("user:::::",user);
        //       this.props.actionLoginAdmin(this.state.textEmail,"LoginAdmin");   

        //       this.props.navigation.navigate("admin",
        //       {
        //           userEmail:this.state.textEmail
        //       }); 

        //     } else {
        //       // No user is signed in.
        //       console.log("userNotLoegado:::::",user);
        //     }
        // });           

        // console.log("testLogin::: ", testLogin);
        console.log("props::: ", this.props);
    }
    render() {

        const sidebar = (
            <View>
                <View>

                    <TextInput
                        style={styles.texto}
                        placeholder="Ingrese su usuario"
                        onChangeText=
                        {
                            (tx) => { this.setState({ textEmail: tx }); }
                        }
                    />
                    <TextInput
                        style={styles.texto}
                        placeholder="Ingrese su contraseña"
                        onChangeText=
                        {
                            tx => { this.setState({ password: tx }); }
                        }
                    />
                    <Button title={"Ingresar -"} onPress={(e) => this.tab(e)} />

                </View>
            </View>
        )

        return (
            <View >
                <ScrollView>
                    {sidebar}
                </ScrollView>
            </View>
        )
    }
}


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
        color: "black",
        fontSize: 20,
        textAlign: 'center',
    },
    itemForm: {
        flexDirection: 'row'
    }
}

const mapStateToProps = state => {
    return { correo: state.loginReducer }
}

export default connect(mapStateToProps, actions)(GestionAdministrativa)