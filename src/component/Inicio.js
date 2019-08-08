import React, { Component } from 'react'
import { Text, View, Button, Platform,TouchableOpacity, Image } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { MenuBase } from './MenuBase'
import ic_menu from '../resources/Image/list.png'

class Inicio extends Component {

    constructor(props){
        super(props)
        console.log("constructor",props)
    }

    static navigationOptions = ({ navigation }) => {        

        return {                    
          headerTitle:'Ubicate',
          headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#3B5998',
          },
          headerLeft : (
            <TouchableOpacity
                onPress={(e)=>{navigation.openDrawer()}}>
                <Image style={{ tintColor: 'white', width:30, marginLeft:10 }} source={ic_menu} />
            </TouchableOpacity>
          ),
        };
    }

    render() {
        return (
             //<MenuBase data={data} navigation={this.props.navigation}></MenuBase>
             <Text>Inicio</Text>
        )
    }
}


const mapStateToProps = state =>{
    return {id: state}
}

export default connect(mapStateToProps, actions)(Inicio)