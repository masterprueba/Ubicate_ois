import React, { Component } from 'react'
import { Text, View, FlatList, Platform, TouchableOpacity, Image, StyleSheet, Dimensions, Animated, ImageBackground } from 'react-native'
import iconRadar from '../../resources/Image/radar.png'

export default class Header extends Component {

    render() {
        
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 50 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}> {this.props.dataHeader.titulo} </Text>
                </View>                
                <View style={{ flex: 50 }}>
                    <TouchableOpacity
                        onPress={(e) => { navigation.navigate("mapasitiocercano"); }}
                    >
                        <Image source={iconRadar} style={{ height: '80%', width: '100%', marginTop: 9, marginLeft: 55, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}