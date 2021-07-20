import React, {useState} from 'react';
import {StyleSheet, Modal, Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';

import Colors from '../constants/Colors.js';

import InputBox from './InputBox.js';

import { updateStorage } from '../functions/databaseForPlans.js';

const ModalView = props => {

    const [dreamValue, setDreamValue] = useState('');
    const [challengeValue, setChallengeValue] = useState('');
    const [overcomeValue, setOvercomeValue] = useState('');
    const [attitudeValue, setAttitudeValue] = useState('');
    const [stepsValue, setStepsValue] = useState('');

    const dreamHandler = (inputText) => {setDreamValue(inputText);};
    const challengeHandler = (inputText) => {setChallengeValue(inputText);};
    const overcomeHandler = (inputText) => {setOvercomeValue(inputText);};
    const attitudeHandler = (inputText) => {setAttitudeValue(inputText);};
    const stepsHandler = (inputText) => {setStepsValue(inputText);};

    const addPlanHandler = () => {
        Alert.alert('Confirm?', 'Is your plan finalized?', [{text: 'Yes', onPress: databaseItemSetter}, {text: 'No', style: 'cancel'}]);
    };

    const databaseItemSetter = async() => {
        const dreamVal = dreamValue.trim();
        const challengeVal = challengeValue.trim();
        const overcomeVal = overcomeValue.trim();
        const attitudeVal = attitudeValue.trim();
        const stepsVal = stepsValue.trim();
        if (dreamVal!=='' && challengeVal!=='' && overcomeVal!=='' && attitudeVal!=='' && stepsVal!=='') {
            await updateStorage(dreamVal, challengeVal, overcomeVal, attitudeVal, stepsVal);
            cancelPlanHandler();
        }
        else {
            Alert.alert('Invalid Response(s)!', 'Please make sure that all of your fields are filled out validly.');
        }
    }

    const cancelPlanHandler = () => {
        setDreamValue('');
        setChallengeValue('');
        setOvercomeValue('');
        setAttitudeValue('');
        setStepsValue('');
        props.changeVisibility();
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.wholeModal}>
                <ScrollView>
                    <View style={styles.modalHeading}><Text style={styles.modalHeadingText}>YOUR PLAN</Text></View>
                    <TouchableOpacity style={styles.submitCancelButton} onPress={cancelPlanHandler}>
                        <Text style={styles.submitCancelText}>Cancel - Back To Home</Text>
                    </TouchableOpacity>
                    <Text>{'\n'}</Text>
                    <InputBox label='Enter a dream of yours' value={dreamValue} onChangeText={dreamHandler}/>
                    <InputBox label='Explain something that is holding you back' value={challengeValue} onChangeText={challengeHandler}/>
                    <InputBox label='Think about how you can overcome that challenge' value={overcomeValue} onChangeText={overcomeHandler}/>
                    <InputBox label='What attitude(s) do you need to have?' value={attitudeValue} onChangeText={attitudeHandler}/>
                    <InputBox label='Enter the first step you need to take' value={stepsValue} onChangeText={stepsHandler}/>
                    <View>
                        <TouchableOpacity style={styles.submitInfoButton} onPress={addPlanHandler}>
                            <Text style={styles.submitInfoText}>Lock-In Your Plan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitCancelButton} onPress={cancelPlanHandler}>
                            <Text style={styles.submitCancelText}>Cancel - Back To Home</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wholeModal: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
    },
    modalHeading: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
    },
    modalHeadingText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.accentTwo,
        fontStyle: 'italic'
    },
    submitInfoButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 9,
        backgroundColor: Colors.accentTwo,
        borderRadius: 20
    },
    submitCancelButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        padding: 9,
        backgroundColor: Colors.primary,
        borderRadius: 20
    },
    submitInfoText: {
        fontSize: 20,
        color: Colors.accentOne,
        fontWeight: 'bold'
    },
    submitCancelText: {
        fontSize: 20,
        color: Colors.accentTwo
    }
});

export default ModalView;