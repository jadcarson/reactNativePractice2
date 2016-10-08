import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
    apiKey: 'AIzaSyCO-wmW4DW-33CgIddLT2ag_50jMgAVn4w',
    authDomain: 'authentication-15374.firebaseapp.com',
    databaseURL: 'https://authentication-15374.firebaseio.com',
    storageBucket: 'authentication-15374.appspot.com',
    messagingSenderId: '471324394597'
  });
  }
  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        <Text> An App!</Text>
      </View>
      );
  }
}

export default App;
