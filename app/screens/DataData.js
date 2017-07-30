import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';

class DataData extends Component {
  contructor(props) {
    super(props);

    this.state = {
      emotion: 'emotionless',
    };
  }

  takePicture() {
    const options = {};
    this.camera.capture({ metadata: options })
    .then((result) => {
      this.findEmotions(result.data);
      this.setState({ emotion: 'loading' });
    })
    .catch(err => console.error(err));
  }

  findEmotions = data => {
    const url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize';

    RNFetchBlob.fetch('POST', url, {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': '385621ca6c6b4e0ab184a2dde6b2d23e',
    }, data)
    .then(result => this.setEmotion(result.json()))
  }

  setEmotion(data) {
    if(!Array.isArray(data) || data.length === 0) {
      return this.setState({ emotion: 'empty' });
    }

    const { scores } = data[0];
    const emotions = Object.keys(scores);
    const results = [];

    for (const emotion of emotions) {
      results.push({
        emotion: emotion,
        value: scores[emotion],
      });
    console.log(results);
    }
  }
}
