import React, { Component } from 'react'
import { Text, View, Button, Platform, TouchableOpacity, Image, ScrollView } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import ic_menu from '../resources/Image/list.png'
import iconMapa from '../resources/Image/mapa.png'
import styled from 'styled-components'

class Inicio extends Component {

  constructor(props) {
    super(props)
    console.log("constructor", props)
  }

  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: 'Ubicate',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3B5998',
      },
      headerLeft: (
        <TouchableOpacity
          onPress={(e) => { navigation.openDrawer() }}>
          <Image style={{ tintColor: 'white', width: 30, marginLeft: 10 }} source={ic_menu} />
        </TouchableOpacity>
      ),
    };
  }

  routeMap(e) {
    this.props.navigation.navigate("mapasitiocercano");
  }

  render() {

    const Container = styled.View`        
      padding:10px 0 30px;
      justify-content:center;
      background-color:#f4f4f4; 
      margin-bottom:20px;       
      align-items:center`

    const Item = styled.View`            
          border:1px solid #ccc;
          margin:2px 0;
          border-radius:10px;
          box-shadow:0 0 10px #ccc;
          background-color:#fff;
          width:80%;  
          height:220;          
          padding:10px;`

    const ItemText = styled.View`            
          border:1px solid #ccc;
          margin:2px 0;
          border-radius:10px;
          box-shadow:0 0 10px #ccc;
          background-color:#fff;
          width:80%;  
          height:50;          
          padding:10px;`

    const sidebar = (

      <View style={styles.fondo}>

        <View style={styles.row}>

          <View style={styles.rowUno}>
            <TouchableOpacity onPress={(e) => { this.routeMap(e); }}>
              <Container style={styles.fondo}>
                <Item>
                  <Image source={iconMapa} style={styles.img} />
                </Item>
                <ItemText>
                  <Text style={styles.text}>Tus Lugares Cercanos</Text>
                </ItemText>
              </Container>
            </TouchableOpacity>
          </View>

          <View style={styles.rowUno} >
            <TouchableOpacity onPress={(e) => { console.log("Preciono"); }}>
              <Container style={styles.fondo}>
                <Item>
                  <Image source={iconMapa} style={styles.img} />
                </Item>
              </Container>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.row}>

          <View style={styles.rowDos}>
            <TouchableOpacity onPress={(e) => { console.log("Preciono"); }}>
              <Container style={styles.fondo}>
                <Item>
                  <Image source={iconMapa} style={styles.img} />
                </Item>
              </Container>
            </TouchableOpacity>
          </View>

          <View style={styles.rowDos} >
            <TouchableOpacity onPress={(e) => { console.log("Preciono"); }}>
              <Container style={styles.fondo}>
                <Item>
                  <Image source={iconMapa} style={styles.img} />
                </Item>
              </Container>
            </TouchableOpacity>
          </View>

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

const styles = {
  fondo: {
    backgroundColor: "#C5CAE9"
  },
  row: {
    flexDirection: 'row'
  },
  rowUno: {
    flex: 25
  },
  rowDos: {
    flex: 25
  },
  img: {
    height: '100%', width: '100%'
  },
  text: {
    color: 'blue'
  }
}

const mapStateToProps = state => {
  return { id: state }
}

export default connect(mapStateToProps, actions)(Inicio)