import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'
import styled from 'styled-components'
import Api from '../utli/Api';
import {store, persistor} from '../store'
import ic_menu from '../resources/Image/list.png'


class SitioTuristico extends Component {

    async componentDidMount(){
        const sitios = await Api.getSitios()        
        store.dispatch({
            type :'GET_SISTIOS',
            payload : sitios
        })
    }

    static navigationOptions = ({ navigation }) => {        

        return {                    
          headerTitle:'Sitios Turísticos',
          headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#3B5998',
          },
          headerLeft : (
            <TouchableOpacity
                onPress={(e)=>{navigation.openDrawer()}}>
                <Image style={{ tintColor: 'white', width:30, marginLeft:10 }} source={ic_menu} />
            </TouchableOpacity>
          ),
        };
    }

    _onPressButton(pr,id) {
        this.props.navigation.navigate("detalleSitio",
        {
            idSitio:id
        });        
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


        const sidebar = (
            <View style={{ backgroundColor: "#C5CAE9" }}>
                {this.props.sitios.map((sitio) =>
                    <TouchableOpacity onPress={this._onPressButton.bind(this, this.props,sitio.id)} key={sitio.id}>
                        <Container style={{ backgroundColor: "#C5CAE9" }}>
                            <Item>
                                <Image source={{ uri: sitio.url }} style={{ height: 200 }} />
                                <View style={styles.cajaimg}>
                                    <Text style={styles.texto}>{sitio.title}</Text>
                                </View>
                            </Item>
                        </Container>
                    </TouchableOpacity>
                )}
            </View>
        );

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
    }
}


const mapStateToProps = state => {
    return { sitios:state.sitioReducer }
}

export default connect(mapStateToProps, actions)(SitioTuristico)