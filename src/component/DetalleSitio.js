import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'
import Api from '../utli/Api';
import styled from 'styled-components'


class DestalleSitio extends Component {


    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        title: `Sitios Turisticos`,
    };

    async componentDidMount() {
        const sitios = await Api.getSitios()
        this.getSitio(sitios);
    }

    getSitio(sitios) {                

        let params = this.props.navigation.state.params;

        let data = sitios.find((item) => {
            if (item.id == params.idSitio) {
                return true
            }
        });

        console.log("data::", data);
        this.props.actionDetSitio(data);
        console.log("this.props::", this.props.dataSitio.url);
    }

    render() {

        let content =
            <View /* style={styles.contenPadre} */>
                <View style={styles.contenPadre}>                
                    <Image source={{ url: this.props.dataSitio.url }}
                        style={styles.contenImg} />
                </View>
                <View style={styles.contenPadre}>
                    <Text style={styles.contenInfo}>{ this.props.dataSitio.info }</Text>
                </View>
            </View>

        let data = {
            title: this.props.dataSitio.title,
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
 
        height: 200
    },
    contenInfo: {
        flex: 30,
        color:"#2456bf",
        fontSize:16
    }
}

export default connect(mapStateToProps, actions)(DestalleSitio)
