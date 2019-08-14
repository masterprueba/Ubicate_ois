import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Mapa extends Component {

 
    render() {

        return (
            <View>               
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
        )
    }

}

const mapStateToProps = state => {
    return { dataSitio: state.detalleReducer }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
// const styles = {
//     contenPadre: {
//         // flex:100
//         flexDirection: 'row',
//     },
//     contenImg: {

//         height: 200
//     },
//     contenInfo: {
//         flex: 30,
//         color: "#2456bf",
//         fontSize: 16
//     }
// }

export default connect(mapStateToProps, actions)(Mapa)