import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';

export class InfoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       
          <Text style={styles.text}>
            Esta aplicacion funciona para traerte la foto de la nasa del día,
            llamada potd (Picture of the day) ademas de un poco de datos sobre
            la foto, todo facilitado por la API de la N.A.S.A
          </Text>
          <StatusBar style="auto" />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
