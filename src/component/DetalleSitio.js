import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'
import styled from 'styled-components'


class DestalleSitio extends Component {


    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        title: `Sitios Turisticos`,
    };

    componentDidMount() {

        this.getSitio();
    }

    getSitio() {

        const sitios = [
            {
                uri: 'https://cdn.colombia.com/sdi/2012/11/28/acuaparque-de-la-cana-724146.jpg',
                id: 1,
                title: "Acuaparque De La Caña",
                info: "El Acuaparque de la Caña es un espacio en el que la diversión está garantizada, aquí los planes en familia y con los amigos se convierten en memorables ...",

            },
            {
                uri: 'https://cdn.colombia.com/sdi/2012/12/28/barrio-y-capilla-de-san-antonio-717962.jpg',
                id: 2,
                title: "Capilla De San Antonio",
                info: "La Capilla de San Antonio, es de tipo barroco, se encuentra ubicada en la Colina de San Antonio en Santiago de Cali, Colombia"
            },
            {
                uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/CENTRO_CULTURAL_DE_CALI.jpg',
                id: 3,
                title: "Centro Cultural De Cali",
                info: "Con una arquitectura ecléctica que mezcla elementos modernos con medievales, este centro cultural recibió el Premio Nacional de Arquitectura en 1990."
            },
            {
                uri: 'https://cdn.colombia.com/sdi/2012/11/29/iglesia-la-ermita-718053.jpg',
                id: 4,
                title: "Iglesia La Ermita",
                info: "Uno de los símbolos  más representativos de la ciudad de Cali es la iglesia la Ermita del Río, una bella edificación en estilo gótico, sublime."
            }
        ];

        let params = this.props.navigation.state.params;

        let data = sitios.find((item) => {
            if (item.id == params.idSitio) {
                return true
            }
        });

        console.log("data::", data);
        this.props.actionDetSitio(data);
        console.log("this.props::", this.props);
    }

    render() {

        let content =
            <View /* style={styles.contenPadre} */>
                <View style={styles.contenPadre}>
                    <Image source={{ uri: this.props.dataSitio.uri }}
                        style={styles.contenImg} />
                </View>
                <View style={styles.contenPadre}>
                    <Text style={styles.contenInfo}>{ this.props.dataSitio.info }</Text>
                </View>
            </View>

        let data = {
            title: this.props.dataSitio.title.toUpperCase(),
            content: content
        }

        return (
            <MenuBase data={data} navigation={this.props.navigation}></MenuBase>
        )
    }

}

const mapStateToProps = state => {
    return { dataSitio: state.detalleReducer }
}

const styles = {
    contenPadre: {
        // flex:100
        flexDirection: 'row',
    },
    contenImg: {
        flex: 20,
        height: 200
    },
    contenInfo: {
        flex: 30,
        color:"#2456bf",
        fontSize:16
    }
}

export default connect(mapStateToProps, actions)(DestalleSitio)
