import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const ScreenAStack = createStackNavigator({
  ScreenA: {screen: ScreenA},
});

const TabScreens = createBottomTabNavigator(
  {
    ScreenA: {
      screen: ScreenAStack,
      navigationOptions: ({navigation}) => {
        console.log('here', navigation);
        return {
          tabBarLabel:
            navigation &&
            navigation.state &&
            navigation.state.routes[0] &&
            navigation.state.routes[0].params &&
            navigation.state.routes[0].params.tabText
              ? navigation &&
                navigation.state &&
                navigation.state.routes[0] &&
                navigation.state.routes[0].params &&
                navigation.state.routes[0].params.tabText
              : 'Screen A',
        };
      },
    },
    ScreenB: {
      screen: ScreenB,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export const AppNav = createAppContainer(TabScreens);
