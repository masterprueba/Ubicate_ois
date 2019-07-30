import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, Alert,TouchableOpacity  } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'

class DestalleSitio extends Component {
    static navigationOptions = {
        title: `Sitios Turisticos`,
    };

    render() {
        return(
            <Text>Detalle</Text>
        )
    }
}
    const mapStateToProps = state => {
        return { id: state.pruebaid }
    }

    
    export default connect(mapStateToProps, actions)(DestalleSitio)