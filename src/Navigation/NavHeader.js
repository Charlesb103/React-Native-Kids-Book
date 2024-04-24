import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, useWindowDimensions } from 'react-native';

const NavHeader = () => {
    const { width, height } = useWindowDimensions();
    const fontSize = width > height ? width / 25 : width / 12; // Adjust font size based on screen orientation

    return (
        <View style={styles.headerContainer}>
            <Text style={[styles.headerStyle, { fontSize }]}>StoryLand Adventures</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    headerStyle: {
        color: '#fff', // White text color
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

export default NavHeader;
