import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';

const Plan = props => {
    return (
        <TouchableOpacity onPress={props.sendToPlanPage} onLongPress={props.confirmDelete}>
            <View style={styles.container}>
                <Text style={styles.planTitle}>View Dream Plan {props.planNumber}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: Colors.accentThree,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    planTitle: {
        margin: 15,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    }
});

export default Plan;