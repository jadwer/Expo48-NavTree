import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStackNav from './navigation/LoginStackNav';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <LoginStackNav />
      </NavigationContainer>
    );
  }
}
