import React from 'react';
import {StyleSheet, TextInput, Text, View, Dimensions} from 'react-native';

import Colors from '../constants/Colors.js';

const InputBox = props => {
    return (
        <View style={styles.overallContainer}>
            <Text style={styles.labelText}>{props.label}{"\n"}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputItself}
                    multiline={true}
                    numberOfLines={5}
                    value={props.value}
                    onChangeText={props.onChangeText}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overallContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    labelText: {
        textAlign: 'center',
        fontSize: 30
    },
    inputContainer: {
        borderColor: Colors.primary,
        borderWidth: 2,
        backgroundColor: 'gainsboro',
        color: 'black',
        paddingHorizontal: 7,
        paddingVertical: 5,
        fontSize: 50
    },
    inputItself: {
        textAlign: 'center',
        color: 'black',
        fontSize: 23,
        width: Dimensions.get('screen').width - 90,
        maxWidth: Dimensions.get('screen').width
    }
});

export default InputBox;