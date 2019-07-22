/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';
// import {store} from './store.js'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './Home'
import Inicio from './inicio'
import Favoritos from './Favoritos';
import Hotel from './Hotel';
import SitioTuristico from './SitioTuristico';
import ComidaBebida from './ComidaBebida';
import GestionAdministrativa from './GestionAdministrativa';
import Guia from './Guia';


export default class App extends Component {
  render() {
    let RootStack = createStackNavigator({
      inicial: Home,
      inicio: Inicio,
      guia:Guia,
      favorito: Favoritos,
      hotel: Hotel,
      sitio:SitioTuristico,
      comida:ComidaBebida,
      gestion:GestionAdministrativa
    });
    
    // And the app container
    let Navigation = createAppContainer(RootStack);
    
    return (
      // <Provider store={store}>
     <Provider store={createStore(Reducers)}>
       <Navigation />
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
});
