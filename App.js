import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Data from './components/Data';
import HistoryHistory from './components/HistoryHistory';
import Share from './components/Share';
import Home from './components/Home';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          key='tabbar'
          tabs
          tabBarStyle={{ backgroundColor: '#000000' }}
        >
          <Scene key='home' title='Home' icon={TabIcon}>
            <Scene
              key='home'
              component={Home}
              title='Welcome to FaceApp!'
              initial
            />
          </Scene>
          <Scene key='data' title='Data' icon={TabIcon}>
            <Scene
              key='data'
              component={Data}
              title='Data'
            />
          </Scene>
          <Scene key='history' title='History' icon={TabIcon}>
            <Scene
              key='history'
              component={HistoryHistory}
              title='History'
            />
          </Scene>
          <Scene key='share' title='Share' icon={TabIcon}>
            <Scene
              key='share'
              component={Share}
              title='Share'
              />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
});

export default App;
