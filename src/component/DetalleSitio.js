import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Api from '../utli/Api';
import styled from 'styled-components'
import iconMapa from '../resources/Image/mapa.png'
import {
    CachedImage,
    ImageCacheProvider
} from 'react-native-cached-image';

const sitioSelec = null;

class DestalleSitio extends Component {
    

    constructor(props) {
        super(props)
        console.log("props:: ",props);
    }

    static navigationOptions = {
        title: `Detalle Sitio Turistico`,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#3B5998',
        }
    };

    async componentDidMount() {
        
    }


    routeMap(e) {        
        this.props.navigation.navigate("mapa");
    }

    render() {

        const Container = styled.View`
        
        padding:10px 0 24px;
        justify-content:center;
        background-color:#f4f4f4; 
        margin-bottom:1px;       
        align-items:center`

        const Item = styled.View`            
            border:1px solid #ccc;
            margin:1px 0;
            border-radius:10px;
            box-shadow:0 0 10px #ccc;
            background-color:#fff;
            width:80%;  
            height:220;          
            padding:10px;`

        this.sitioSelec = this.props.navigation.state.params;        

        const sidebar = (

            <View>
                <View style={styles.fondo}>
                    <Container style={styles.fondo}>
                        <Item>
                            <CachedImage source={{ uri: this.sitioSelec.idSitio['url'] }}
                                style={styles.contenImg} />
                        </Item>
                    </Container>
                </View>
                <View style={styles.fondo}>
                    <Container style={styles.fondo}>
                        <Item>
                            <Text style={styles.contenInfo}>
                                {this.sitioSelec.idSitio['title']}
                            </Text>
                        </Item>
                    </Container>
                </View>
                <View style={styles.fondo}>
                    <TouchableOpacity onPress={(e) => { this.routeMap(e) }}>
                        <Container style={{ backgroundColor: "#C5CAE9" }}>
                            <Item>
                                <Image source={iconMapa} style={{ height: '100%', width: '100%' }} />
                            </Item>
                        </Container>
                    </TouchableOpacity>

                </View>
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

const mapStateToProps = state => {
    return { dataSitio: state.detalleReducer }
}


const styles = {
    fondo: {
        backgroundColor: "#C5CAE9"
    },
    contenImg: {

        height: 200
    },
    contenInfo: {
        color: "#2456bf",
        fontSize: 16
    },
    container: {
        height: 150,
        width: 200,
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
        color: "white",
        fontSize: 20,
        textAlign: 'center',
    }
}

export default connect(mapStateToProps, actions)(DestalleSitio)
