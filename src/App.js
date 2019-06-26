/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Prueba from './prueba'
import Prueba2 from './prueba2'


export default class App extends Component {
  render() {
    let RootStack = createStackNavigator({
      inicial: Prueba,
      final: Prueba2
    });
    
    // And the app container
    let Navigation = createAppContainer(RootStack);
    
    return (
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
