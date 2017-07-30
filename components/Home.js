import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Data from './Data';
import HistoryHistory from './HistoryHistory';
import Share from './Share';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Take a picture and get stats!</Text>
        <Text>Press the Camera tab to get started!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
