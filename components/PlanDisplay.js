import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const PlanDisplay = props => {

    const [dreamView, setDreamView] = useState('');
    const [challengeView, setChallengeView] = useState('');
    const [overcomeView, setOvercomeView] = useState('');
    const [attitudeView, setAttitudeView] = useState('');
    const [stepsView, setStepsView] = useState('');

    useEffect(() => {
        const arrayView = props.currentPlan;
        setDreamView(arrayView[0]);
        setChallengeView(arrayView[1]);
        setOvercomeView(arrayView[2]);
        setAttitudeView(arrayView[3]);
        setStepsView(arrayView[4]);
    }, [props.currentPlan]);

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.wholeModal}>
                <TouchableOpacity onPress={props.closeModal}>
                    <View style={styles.cancelStyle}>
                        <Ionicons name='md-close-circle' size={50} color={Colors.accentOne}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.modalHeading}><Text style={styles.modalHeadingText}>DREAM VIEW</Text></View>
                <ScrollView>
                    <View style={styles.displayContainer}>
                        <View style={styles.indDisplay}>
                            <Text style={{fontSize: 40, fontWeight: 'bold'}}>DREAM</Text>
                            <Text style={styles.indDisplayText}>{dreamView}</Text>
                        </View>
                        <View style={styles.indDisplay}>
                            <Text style={{fontSize: 40, fontWeight: 'bold'}}>CHALLENGE</Text>
                            <Text style={styles.indDisplayText}>{challengeView}</Text>
                        </View>
                        <View style={styles.indDisplay}>
                            <Text style={{fontSize: 40, fontWeight: 'bold'}}>SOLUTION</Text>
                            <Text style={styles.indDisplayText}>{overcomeView}</Text>
                        </View>
                        <View style={styles.indDisplay}>
                            <Text style={{fontSize: 40, fontWeight: 'bold'}}>ATTITUDE(S)</Text>
                            <Text style={styles.indDisplayText}>{attitudeView}</Text>
                        </View>
                        <View style={styles.indDisplay}>
                            <Text style={{fontSize: 40, fontWeight: 'bold'}}>STEP 1</Text>
                            <Text style={styles.indDisplayText}>{stepsView}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wholeModal: {
        padding: 30,
        flex: 1,
        alignItems: 'center',
    },
    cancelStyle: {
        justifyContent: 'center',
        alignItems: 'flex-start'
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
    displayContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 20
    },
    indDisplay: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    indDisplayText: {
        textAlign: 'center',
        fontSize: 30
    }
});

export default PlanDisplay;