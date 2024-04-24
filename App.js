import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Nav } from './src/Navigation/Nav';

const DEVICE_SCREEN_WIDTH = Dimensions.get('window').width;
const DEVICE_SCREEN_HEIGHT = Dimensions.get('window').height;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        user: null
    };
  }


  render() {
      return (
          <View style={styles.container}>
              <Nav/>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', // Set background color to match the rest of the app
  },
});

export default App;
