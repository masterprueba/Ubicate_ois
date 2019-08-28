import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';



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
            ],
            puntos: []
        };
    }

    static navigationOptions = {
        title: `Detalle Sitio Turistico`,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#3B5998',
        }
    };


    // ----------------------------------------------- //

    obtener = () => {
        if (tieneElPermiso) {
            Geolocation.getCurrentPosition(
                (position) => {                   
                    var data = this.state.puntos;
                    data.push({ latitude: position.coords.latitude, longitude: position.coords.longitude });
                    this.setState({ puntos: data });

                },
                (error) => {
                    // See error code charts below.
                    console.log("error", error);
                    Alert.alert("" + error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 35000, maximumAge: 10000 }
            );            
        } else {
            this.solicitar();
        }

    }
    componentDidMount() {
        this.solicitar();
    }
    // async componentWillMount() {
    //     await requestLocationPermission() // which always returns "You can use the camera" even if I disable camera permission access on my device
    // }

    async solicitar() {
        await requestLocationPermission();
    }

    // ----------------------------------------------- //

    ponerUbicacion(e) {
        var data = this.state.datos;
        data.push(e.nativeEvent.coordinate);
        this.setState({ datos: data });
    }

    cargarPuntos() {
        this.obtener
        console.log("getCamera()", "");
    }


    render() {

        return (
            <View style={styles.container}>
                <MapView
                    zoomEnabled={true} //Habilita el zoom del mapa
                    onMapReady={this.cargarPuntos}
                    // onPress={(e) => this.ponerUbicacion(e)}
                    style={styles.map}
                    initialRegion={{
                        latitude: 3.4326528,
                        longitude: -76.5215028,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                    {this.state.puntos.map(marker => (
                        <Marker //draggable *Si se habilita se arrastra*
                            coordinate={marker}
                        />
                    ))}
                </MapView>
                <Button title="Ubicar" onPress={this.obtener}></Button>
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
        width: 500,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

var tieneElPermiso = false;

export async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Example App',
                message: 'Example App access to your location ',
                buttonPositive: 'OK'
            }
        )                
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location")
            // alert("You can use the location");
            tieneElPermiso = true;
        } else {
            console.log("location permission denied")
            alert("Location permission denied");
            tieneElPermiso = false;
        }
    } catch (err) {
        console.warn(err)
    }
}


export default connect(mapStateToProps, actions)(MapaSitioCercano)