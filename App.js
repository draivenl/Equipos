import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TeamsScene from './src/scenes/Teams/'
import TeamDetailScene from './src/scenes/TeamDetail/'

const RootStack = createStackNavigator({
  TeamsScreen: {
      screen: TeamsScene,
      navigationOptions: {
        header: null
      }
  },
  TeamDetailScreen: {
    screen: TeamDetailScene,

}
}, {
    initialRouteName: 'TeamsScreen'
  
});

class App extends Component {

render() {
  return (
    <RootStack/>
  );
}
}

export default App;