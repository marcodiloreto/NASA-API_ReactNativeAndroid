import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Alert, Container, Header, Content, Card, CardItem, Body , Text} from 'native-base';
import { ImageCard } from '../Componentes/ImageCard';
const getPotd = require('../api/nasaPotd');

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.img = [];
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    if (!this.state.ready) {
      getPotd()
        .then((data) => {
          this.setData(data);
          this.setState({ ready: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  setData(data) {
    this.img.push({
      title: data.data.title,
      url: data.data.url,
      desc: data.data.explanation,
      autor: data.data.copyright,
      date: data.data.date,
    });
    console.log(this.img[0]);
  }

/**/

  render() {
    console.log('soy render');
    if (this.state.ready) {
      return (
          
        <View style={styles.container}>
          <ImageCard 
            url={this.img[0].url}
            title={this.img[0].title}
            desc={this.img[0].desc}
            autor={this.img[0].autor}
            date={this.img[0].date}          
          />
        </View>

      );
    } else {
      return (
        <View style={styles.container}>
          <Text> cargando... </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1a1a',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
});
