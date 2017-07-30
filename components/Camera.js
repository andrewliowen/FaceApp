import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
} from 'react-native';
import Camera from 'react-native-camera';
import RNFetchBlob from 'react-native-fetch-blob';
import Orientation from 'react-native-orientation';
import Data from './Data';
import HistoryHistory from './HistoryHistory';
import Home from './Home';
import Share from './Share';

export default class CameraCamera extends Component {

  constructor(props) {
    super(props);

  this.state = {
    emotion: 'emotionless',
    rotation: 0,
  };
}

takePicture() {
  const options = {};
  this.camera.capture({ metadata: options })
  .catch(err => console.error(err));
}

  render() {

    const { emotion, rotation } = this.state;
     return (
       <View style={styles.container}>
        <Camera
          style={styles.preview}
          ref={(cam) => this.camera = cam}
          type={Camera.constants.Type.front}
          captureTarget={Camera.constants.CaptureTarget.memory}
        >
        </Camera>
      </View>
     );
  }
  componentWillMount() {

    const initial = Orientation.getInitialOrientation();
    this.handleOrientationChange(initial);
  }

  componentDidMount() {
    Orientation.addSpecificOrientationListener(this.handleOrientationChange);
  }

  handleOrientationChange = (orientation) => {
    switch (orientation) {
      case 'LANDSCAPE-LEFT':
        this.setState({ rotation: 90 });
        break;
      case 'LANDSCAPE-RIGHT':
        this.setState({ rotation: 270 });
        break;
      case 'PORTRAIT':
        this.setState({ rotation: 0 });
        break;
      case 'PORTRAITUPSIDEDOWN':
        this.setState({ rotation: 180 });
        break;
      default:
        this.setState({ rotation: 0 });
        break;
    }
  }

  componentWillUnmount() {
    Orientation.removeSpecificOrientationListener(this.handleOrientationChange);
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});
