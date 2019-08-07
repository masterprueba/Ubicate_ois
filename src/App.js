/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store';
// import {store} from './store.js'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Inicio from './component/Inicio'
import Favoritos from './component/Favoritos';
import Hotel from './component/Hotel';
import SitioTuristico from './component/SitioTuristico';
import ComidaBebida from './component/ComidaBebida';
import GestionAdministrativa from './component/GestionAdministrativa';
import Guia from './component/Guia';
import DetalleSitio from './component/DetalleSitio';
import { TextLoader} from 'react-native-indicator';



export default class App extends Component {
  render() {
    let RootStack = createStackNavigator({
      inicial: Inicio,
      inicio: Inicio,
      guia:Guia,
      favorito: Favoritos,
      hotel: Hotel,
      sitio:SitioTuristico,
      comida:ComidaBebida,
      gestion:GestionAdministrativa,
      detalleSitio:DetalleSitio

    });
    
    // And the app container
    let Navigation = createAppContainer(RootStack);
    const loading = <View style={styles.loading}><TextLoader text="Cargando..." ></TextLoader></View>
    
    return (
      // <Provider store={store}>
     <Provider store={store}>
       <PersistGate loading={loading} persistor={persistor}>
          <Navigation />
      </PersistGate>       
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loading:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    fontSize:90
  }
});
