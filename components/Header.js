import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/Colors.js';

const Header = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>DreamWrite</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        elevation: 30,
        shadowOffset: {width: 0, height: 30}
    },
    headingText: {
        fontSize: 35,
        fontWeight: 'bold'
    }
});

export default Header;