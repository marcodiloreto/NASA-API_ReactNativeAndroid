import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerCustomNavigator} from './Navigators/DrawerCustomNavigator.js';

import Login from './Screens/LoginScreen';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false}
}

setLogin(){
    this.setState({isLoggedIn:true});
}

setLogout(){
    this.setState({isLoggedIn:false});
}

  render(){
      if(this.state.isLoggedIn){
        
        return(
        <NavigationContainer>
          <DrawerCustomNavigator onLogout={() => this.setLogout()} />
        </NavigationContainer>
        );
      }else{
      return(
        <Login onLogin={() => this.setLogin()}/>
      );
      }
    
  }

}