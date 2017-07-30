import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, TouchableOpacity } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Data from './Data';
import HistoryHistory from './HistoryHistory';
import Home from './Home';
import Share, {ShareSheet, Button} from 'react-native-share';

class ShareShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  onCancel() {
    console.log("CANCEL")
    this.setState({visible: false});
  }
  onOpen() {
    console.log("OPEN")
    this.setState({visible: true});
  }
  render() {
    let shareOptions = {
      title: "FaceApp",
      message: "Look at how I'm feeling!",
      url: "http://facebook.github.io/react-native/",
    };

    let shareImageBase64 = {
      title: "FaceApp",
      message: "Look at how I'm feeling!",
      url: REACT_ICON,
  };
  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={() => {
      Share.open(shareImageBase64);
    }}>
      <View style={styles.instructions}>
        <Text>Options</Text>
      </View>
    </TouchableOpacity>

    <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
      <Button iconSrc={{ uri: TWITTER_ICON }}
                onPress={()=>{
            this.onCancel();
            setTimeout(() => {
              Share.shareSingle(Object.assign(shareOptions, {
                "social": "twitter"
              }));
            },300);
        }}>Twitter</Button>
      <Button iconSrc={{ uri: FACEBOOK_ICON }}
        onPress={()=>{
          this.onCancel();
          setTimeout(() => {
            Share.shareSingle(Object.assign(shareOptions, {
              "social": "facebook"
            }));
          },300);
        }}>Facebook</Button>
      <Button iconSrc={{ uri: EMAIL_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "email"
                }));
              },300);
          }}>Email</Button>
      </ShareSheet>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  instructions: {
    marginTop: 20,
    marginBottom: 20,
  },
});
