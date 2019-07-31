import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'
import styled from 'styled-components'


class SitioTuristico extends Component {

    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        title: `Sitios Turisticos`,
    };

    _onPressButton(pr,id) {
        this.props.navigation.navigate("detalleSitio",
        {
            idSitio:id
        });
    }

    tab() {
        // this.props.prueba("ir a pantalla 1")
        // this.props.navigation.navigate('inicial');        
    }
    render() {
        const sitios = [
            {
                uri: 'https://cdn.colombia.com/sdi/2012/11/28/acuaparque-de-la-cana-724146.jpg',
                id: 1,
                title: "Acuaparque de la caña"
            },
            {
                uri: 'https://cdn.colombia.com/sdi/2012/12/28/barrio-y-capilla-de-san-antonio-717962.jpg',
                id: 2,
                title: "Capilla de san antonio"
            },
            {
                uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/CENTRO_CULTURAL_DE_CALI.jpg',
                id: 3,
                title: "Centro cultural de cali"
            },
            {
                uri: 'https://cdn.colombia.com/sdi/2012/11/29/iglesia-la-ermita-718053.jpg',
                id: 4,
                title: "Iglesia la ermita"
            }
        ];

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
                {sitios.map((sitio) =>
                    <TouchableOpacity onPress={this._onPressButton.bind(this, this.props,sitio.id)} key={sitio.id}>
                        <Container style={{ backgroundColor: "#C5CAE9" }}>
                            <Item>
                                <Image source={{ uri: sitio.uri }} style={{ height: 200 }} />
                                <View style={styles.cajaimg}>
                                    <Text style={styles.texto}>{sitio.title}</Text>
                                </View>
                            </Item>
                        </Container>
                    </TouchableOpacity>
                )}
            </View>
        );

        let content =
            <View >
                <ScrollView>
                    {sidebar}
                </ScrollView>
            </View>


        let data = {
            title: 'Sitios Turistico',
            content: content
        }

        return (
            <MenuBase data={data} navigation={this.props.navigation}></MenuBase>
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
    return { id: state.pruebaid }
}

export default connect(mapStateToProps, actions)(SitioTuristico)