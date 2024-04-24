import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const DEVICE_SCREEN_WIDTH = Dimensions.get('window').width;
const DEVICE_SCREEN_HEIGHT = Dimensions.get('window').height;

class ViewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.route.params.story,
      renderIndex: 0,
    };
  }

  render() {
    const { story, renderIndex } = this.state;

    return (
      <View style={styles.container}>
        <Swiper
          loop={false}
          index={renderIndex}
          showsButtons={false}
          showsPagination={false}
          onIndexChanged={(index) => this.setState({ renderIndex: index })}
        >
          {story && story.background_images && story.story &&
            story.story.pages.map((page, index) => (
              <ImageBackground
                key={index}
                source={story.background_images[index]}
                style={styles.backgroundImage}
              >
                <View style={styles.overlay}>
                  <View style={styles.pageContainer}>
                    <Text style={styles.pageContent}>{page.page_content}</Text>
                  </View>
                </View>
              </ImageBackground>
            ))}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64DD17', // Vibrant green background
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end', // Align content to the bottom
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent', // Transparent overlay
  },
  pageContainer: {
    position: 'absolute', // Position the container absolutely
    bottom: DEVICE_SCREEN_HEIGHT * 0.1, // Space at the bottom for the text
    paddingHorizontal: 20, // Horizontal padding
    width: '100%', // Take full width
    alignItems: 'center', // Center horizontally
  },
  pageContent: {
    fontSize: DEVICE_SCREEN_WIDTH > 500 ? 32 : 26, // Increased font size
    textAlign: 'center',
    color: '#FFF', // Bright white text color
    fontFamily: 'Comic Sans MS', // Playful font
    fontWeight:'bold',
    textShadowColor: 'black', // Colorful shadow
    textShadowOffset: { width: 0, height: 0 }, // No offset
    textShadowRadius: 10, // Shadow radius
  },
});

export default ViewStory;
