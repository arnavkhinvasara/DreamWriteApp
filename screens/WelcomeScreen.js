import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import Colors from '../constants/Colors.js';

const WelcomeScreen = props => {
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.welcomeText}>Welcome to the most effective dream planner out there!{"\n"}</Text>
            </View>
            <View>
                <Button title='Start Planning' color={Colors.primary} onPress={props.onStartPress}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 50,
        color: 'white'
        
    }
});

export default WelcomeScreen;