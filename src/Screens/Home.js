import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Animated } from 'react-native';

const DEVICE_SCREEN_WIDTH = Dimensions.get('window').width;
const DEVICE_SCREEN_HEIGHT = Dimensions.get('window').height;

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
            animatedTitle: new Animated.Value(0),
        };
    }

    componentDidMount() {
        // Animate the title when component mounts
        this.animateTitle();
    }

    animateTitle() {
        Animated.timing(this.state.animatedTitle, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }

    renderStoryButton(){
        return( 
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Stories')}>
                <Text style={styles.labelStyle}>Explore Stories</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { animatedTitle } = this.state;
        const titleScale = animatedTitle.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1],
        });

        return (
            <ImageBackground source={require('../Stories/Images/background.jpg')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Animated.Text style={[styles.appTitle, { transform: [{ scale: titleScale }] }]}>StoryLand Adventures</Animated.Text>
                    <Text style={styles.description}>Embark on magical journeys and captivating tales!</Text>
                    {this.renderStoryButton()}
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingHorizontal: DEVICE_SCREEN_WIDTH * 0.1, // Adjust padding for responsiveness
  },
  appTitle: {
    fontSize: DEVICE_SCREEN_WIDTH / 12,
    fontWeight: 'bold',
    marginBottom: DEVICE_SCREEN_HEIGHT * 0.03, // Adjust margin for responsiveness
    color: '#FFC857', // Light yellow text color
    textAlign: 'center',
    textShadowColor: '#FF6F61', // Coral shadow color
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  description: {
    fontSize: DEVICE_SCREEN_WIDTH / 20,
    marginBottom: DEVICE_SCREEN_HEIGHT * 0.05, // Adjust margin for responsiveness
    color: '#FFF', // White text color
    textAlign: 'center',
    textShadowColor: '#FF6F61', // Coral shadow color
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  labelStyle: {
    fontSize: DEVICE_SCREEN_WIDTH / 20,
    fontWeight: 'bold',
    color: '#FF6F61', // Coral text color
    textAlign: 'center',
  },
  buttonStyle: {
    width: DEVICE_SCREEN_WIDTH / 2,
    height: DEVICE_SCREEN_WIDTH / 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC857', // Light yellow button color
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default Home;
