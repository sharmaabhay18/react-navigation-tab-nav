import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ScreenB extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Screen B</Text>
      </View>
    );
  }
}
