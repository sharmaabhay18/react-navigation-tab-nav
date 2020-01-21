import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class ScreenA extends Component {
  static navigationOptions = ({
    navigation: {
      state: {params},
    },
  }) => ({
    title: params && params.stackHeader ? params.stackHeader : 'Screen One',
    tabBarLabel: 'tt'
  });

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Button
          title="Change Title Header"
          onPress={() =>
            this.props.navigation.setParams({
              stackHeader: 'Yay! Header Text Changed',
            })
          }
        />
        <Button
          title="Go to ScreenB"
          onPress={() => this.props.navigation.navigate('ScreenB')}
        />
        <Button
          title="Change Tab One Text"
          onPress={() => this.props.navigation.setParams({tabText: 'Bazinga! It Changed'})}
        />
      </View>
    );
  }
}
