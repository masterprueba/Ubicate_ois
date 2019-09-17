import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  TextInput, // 1. <- Add this 
  View,
  Text,
  TouchableOpacity, 
} from 'react-native';

class Hotel extends React.Component {
  state = { name: '' }

  onChangeText = name => this.setState({ name });

  onPress = () => {
    // 1.
    this.props.navigation.navigate('chat', { name: this.state.name });
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.onChangeText}
          style={styles.nameInput}
          placeHolder="John Cena"
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: { // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: { // 4.
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: { // 5.
    marginLeft: offset,
    fontSize: offset,
  },
});

export default connect(null, null)(Hotel)