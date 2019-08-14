import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, StyleSheet } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'
import Api from '../utli/Api';
import styled from 'styled-components'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


class DestalleSitio extends Component {


    constructor(props) {
        super(props)

    }

    static navigationOptions = {
        title: `Detalle Sitio Turistico`,
        headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#3B5998',
          }
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

        // console.log("data::", data);
        this.props.actionDetSitio(data);
        // console.log("this.props::", this.props.dataSitio.url);
    }

    render() {

        // let content =
        //     <View /* style={styles.contenPadre} */>
        //         <View style={styles.contenPadre}>                
        //             <Image source={{ url: this.props.dataSitio.url }}
        //                 style={styles.contenImg} />
        //         </View>
        //         <View style={styles.contenPadre}>
        //             <Text style={styles.contenInfo}>{ this.props.dataSitio.info }</Text>
        //         </View>
        //     </View>

        // let data = {
        //     title: this.props.dataSitio.title,
        //     content: content
        // }
        console.log(this.props.dataSitio.url)
        return (
            
            // <MenuBase data={data} navigation={this.props.navigation}></MenuBase>
            // <View /* style={styles.contenPadre} */>
            // <View style={styles.contenPadre}>                
            //     <Image source={{ uri: this.props.dataSitio.url }}
            //         style={styles.contenImg} />
            // </View>
            // <View style={styles.contenPadre}>
            //     <Text style={styles.contenInfo}>{ this.props.dataSitio.info }</Text>
            // </View>
            <View style={styles.container}>
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                </MapView>
            </View>
        // </View>
        )
    }

}

const mapStateToProps = state => {
    return { dataSitio: state.detalleReducer }
}

const styles = {
    contenPadre: {
        // flex:100
        //flexDirection: 'row',
    },
    contenImg: {
 
        height: 200
    },
    contenInfo: {        
        color:"#2456bf",
        fontSize:16
    },
    container: {        
        height: 150,
        width: 200,
        
      },
}

export default connect(mapStateToProps, actions)(DestalleSitio)
