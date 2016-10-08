import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp(
      {
    apiKey: 'AIzaSyCO-wmW4DW-33CgIddLT2ag_50jMgAVn4w',
    authDomain: 'authentication-15374.firebaseapp.com',
    databaseURL: 'https://authentication-15374.firebaseio.com',
    storageBucket: 'authentication-15374.appspot.com',
    messagingSenderId: '471324394597'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
      );
  }
}

export default App;
