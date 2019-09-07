import React, { Component } from 'react'
import { Text, View, Button, Image, TouchableOpacity, TextInput,ScrollView,Alert } from 'react-native'
import styled from 'styled-components'
import logoInicio from '../resources/Image/logo-inicio.png'
import ic_menu from '../resources/Image/list.png'
import firebase from '../utli/Firesbase'



class GestionAdministrativa extends Component {

    constructor(props) {
        super(props);
        this.state = {textEmail: '',password: ''};
      }
    
    static navigationOptions = ({ navigation }) => {

        return {
            headerTitle:
                (
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 25 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 25 }}>Ubicate </Text>
                        </View>
                        <View style={{ flex: 25, marginLeft: 30 }}>
                            {/* <Text style={{color: 'white', fontSize: 15, marginTop: 30}}>Cerca A Ti :</Text> */}
                        </View>
                        <View style={{ flex: 25 }}>
                            <TouchableOpacity
                                onPress={(e) => { navigation.navigate("mapasitiocercano"); }}
                            >
                                {/* <Image source={iconMapa} style={{ height: '85%', width: '50%', marginTop: 9, marginLeft: 40 }} /> */}
                            </TouchableOpacity>
                        </View>
                    </View>
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

    componentDidMount() {}

    // gestTextEmail(e){
    //     console.log("E:::",e);
    //     this.setState({
    //         inputEmail : e
    //     });

    //     console.log("this.props::",this.props);
    // }


    tab(e) {        

        console.log("this.props",this.state);
        
        var testLogin = firebase.auth().signInWithEmailAndPassword(this.state.textEmail, this.state.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log("errorCode::: ", errorCode);
            console.log("errorMessage::: ", errorMessage);
        });

        // console.log("testLogin::: ", testLogin);
    }
    render() {

        const Item = styled.View`            
            border:1px solid #ccc;
            margin:2px 0;
            border-radius:10px;
            box-shadow:0 0 10px #ccc;
            background-color:#fff;
            width:80%;  
            height:220;          
            padding:10px;`
            

        const sidebar = (
            <View>               
                <View>
                    <Item>
                        <TextInput
                            style={styles.texto}
                            placeholder="Ingrese su usuario"             
                            onChangeText=
                            {
                                (tx) =>{ this.setState({textEmail:tx}); }
                            }
                            value = {
                                this.state.textEmail
                            }
                        />
                        <TextInput
                            style={styles.texto}
                            placeholder="Ingrese su contraseña"
                            onChangeText=
                            {
                                tx => {this.setState({password:tx});}
                            }
                        />
                        <Button title={"Ingresar -"} onPress={(e) => this.tab(e)} />
                    </Item>
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



export default GestionAdministrativa;