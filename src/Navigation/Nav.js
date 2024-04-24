import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions, Linking } from 'react-native';
import Home from '../Screens/Home';
import Stories from '../Screens/Stories';
import ViewStory from '../Screens/ViewStory';
import NavHeader from './NavHeader';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the desired icon from react-native-vector-icons

const Stack = createNativeStackNavigator();
const DEVICE_SCREEN_WIDTH = Dimensions.get('window').width;
const DEVICE_SCREEN_HEIGHT = Dimensions.get('window').height;

export class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        };
    }

    // Function to handle custom back button press
    handleBackButton = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="Home" 
                        component={Home} 
                        options={{ 
                            headerTitle: (props) => <View />,
                            headerTransparent: true, // Make header transparent
                        }}
                    />
                    <Stack.Screen 
                        name="Stories" 
                        component={Stories} 
                        options={({ navigation }) => ({
                            headerTitle: (props) => <View />,
                            headerLeft: () => (
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                    style={styles.backButton}
                                >
                                    <Icon name="arrow-back-outline" size={24} color="white" />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true, // Make header transparent
                        })}
                    />
                    <Stack.Screen 
                        name="ViewStory" 
                        component={ViewStory} 
                        options={({ navigation }) => ({
                            headerTitle: (props) => <View />,
                            headerLeft: () => (
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                    style={styles.backButton}
                                >
                                    <Icon name="arrow-back" size={24} color="white" />
                                </TouchableOpacity>
                            ),
                            headerTransparent: true, // Make header transparent
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 10,
    },
});

export default Nav;
