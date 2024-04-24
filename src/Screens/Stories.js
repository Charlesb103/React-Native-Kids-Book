import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import stories from '../Stories/StoryList';

const DEVICE_SCREEN_WIDTH = Dimensions.get('window').width;
const DEVICE_SCREEN_HEIGHT = Dimensions.get('window').height;

const transition = (
  <Transition.Together>
    <Transition.Out type="fade" durationMs={200} />
    <Transition.In type="fade" durationMs={200} />
  </Transition.Together>
);

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story_list: [],
      selectedIndex: null,
    };
    this.ref = React.createRef();
  }

  componentDidMount = async () => {
    await this.getStories();
  }

  getStories = async () => {
    console.log('story_list', stories);
    this.setState({ story_list: stories ?? [] })
  };

  selectItem = (index) => {
    this.ref.current.animateNextTransition();
    this.setState({ selectedIndex: index });
  };

  render() {
    return (
      <Transitioning.View
        ref={this.ref}
        transition={transition}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ImageBackground source={require('../Stories/Images/background.jpg')} style={styles.backgroundImage}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerStyle}>Explore Stories</Text>
            </View>
            <View style={styles.storyListContainer}>
              {this.state.story_list.map((story, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.storyItem}
                    onPress={() => this.selectItem(index)}
                  >
                    <ImageBackground source={story.image} style={styles.backgroundImage}>
                      <View style={styles.textContainer}>
                        <Text style={styles.title}>{story.title}</Text>
                        <Text style={styles.description}>{story.description}</Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ImageBackground>
        </ScrollView>
      </Transitioning.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FF6F61', // Coral background
    paddingVertical: 10,
    borderRadius: 10, // Rounded corners
    elevation: 5, // Shadow effect
  },
  headerStyle: {
    fontSize: DEVICE_SCREEN_WIDTH / 15,
    color: '#FFF', // White text color
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  storyListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  storyItem: {
    width: '45%',
    aspectRatio: 1, // Make aspect ratio 1:1
    marginVertical: 10,
    borderRadius: 20, // Increased border radius for a modern look
    overflow: 'hidden',
    elevation: 5, // Increased elevation for shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with slight transparency
    borderRadius: 20, // Increased border radius for a modern look
  },
  title: {
    fontSize: DEVICE_SCREEN_WIDTH / 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF6F61', // Coral text color
    marginBottom: 5,
    textShadowColor: '#FFF', // White shadow color
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: DEVICE_SCREEN_WIDTH / 25,
    textAlign: 'center',
    color: '#FF6F61', // Coral text color
    textShadowColor: '#FFF', // White shadow color
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }
});

export default Stories;
