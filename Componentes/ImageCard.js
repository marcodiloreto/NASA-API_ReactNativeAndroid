import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  Alert,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Right,
} from 'native-base';

export class ImageCard extends Component {
  
  render() {
    return (
      <Container>
        <Header style={styles.header}/>
        <Content>
          <Card>
            <CardItem header bordered>
              <Left>
                <Body>
                  <Text>{this.props.title}</Text>
                </Body>
              </Left>
              <Right>
                <Body>
                  <Text note>{this.props.date}</Text>
                </Body>
              </Right>
            </CardItem>
            <CardItem cardBody bordered>
              <Image
                source={{ uri: this.props.url }}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{this.props.desc}</Text>
                <Text> Autor: {this.props.autor}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
   header: {
    backgroundColor: '#1c1a1a',
  }
});
