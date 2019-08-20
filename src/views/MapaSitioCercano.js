import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import MapView, { Marker } from 'react-native-maps';
// import console = require('console');



class MapaSitioCercano extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [
                {
                    //Aguaparke
                    latitude: 3.4541337,
                    longitude: -76.5093822,//AguaParke
                },
                {
                    latitude: 37.78825,
                    longitude: -122.4324
                }
            ]
        };
    }

    static navigationOptions = {
        title: `Detalle Sitio Turistico`,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#3B5998',
        }
    };

    ponerUbicacion(e) {
        var data = this.state.datos;
        data.push(e.nativeEvent.coordinate);
        this.setState({ datos: data });
    }

    cargarPuntos() {
     
        // alert("Cargo");
     
        console.log("getCamera()","");
    }    


    render() {

        return (
            <View style={styles.container}>
                <MapView
                    zoomEnabled={true} //Habilita el zoom del mapa
                    onMapReady={ this.cargarPuntos }
                    // onPress={(e) => this.ponerUbicacion(e)}
                    style={styles.map}
                    initialRegion={{
                        latitude: 3.4326528,
                        longitude: -76.5215028,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                    {this.state.datos.map(marker => (
                        <Marker //draggable *Si se habilita se arrastra*
                            key={marker.latitude}
                            coordinate={marker}
                            title='Acuaparque de la caña'
                            description='Cra. 8 #39-01, Cali, Valle del Cauca'
                        />
                    ))}
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
        height: 600,
        width: 500,
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

export default connect(mapStateToProps, actions)(MapaSitioCercano)