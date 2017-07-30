import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, TouchableOpacity } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Share, {ShareSheet, Button} from 'react-native-share';
import {
  shareOnFacebook
  shareOnTwitter
} from 'react-native-social-share';

tweet : function() {
  shareOnTwitter ({
    'text':'Look at my feelings!'
    'link': ''
    'imagelink':''
  },
  (results) => {
    console.log(results);
    }
  );
},

facebookShare : function() {
  shareOnFacebook({
    'text':'Look at my feelings!'
    'link':''
    'imagelink':''
  },
  (results) => {
    console.log(results);
    }
  );
},

render: function() {
  return (
    <View style={styles}
  )
}
