import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import Colors from '../constants/Colors.js';

import ModalView from '../components/ModalView.js';
import Plan from '../components/Plan.js';
import PlanDisplay from '../components/PlanDisplay.js';

import { removeItem } from '../functions/removeItem.js';

const GoalListScreen = props => {

    const [anythingThere, setAnythingThere] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
    const [listOfPlans, setListOfPlans] = useState([]);
    const [isDisplayMode, setIsDisplayMode] = useState(false);
    const [currentPlan, setCurrentPlan] = useState([]);
    /*
    const removingData = async() => {
        try {
            await AsyncStorage.removeItem('plans');
        } catch (error) {
            console.log('error');
        }
    };
    */
    
    const fetchingData = () => {
        try {
            AsyncStorage.getItem('plans').then(
                plans => {if (plans!==null) {
                    setAnythingThere(true);
                    setListOfPlans(JSON.parse(plans));
                } else {
                    setAnythingThere(false);
                    setListOfPlans([]);
                }
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        //removingData();
        fetchingData();
    }, []);

    const changeVisibilityHandler = () => {
        fetchingData();
        setIsAddMode(false);
    };

    const closeModalHandler = () => {
        setIsDisplayMode(false);
    };

    const confirmDeleteHandler = indexOfItem => {
        const indexPlusOne = indexOfItem + 1;
        Alert.alert(
            'Are you sure you want to delete Dream Plan '+indexPlusOne+'?',
            'It will be deleted forever.',
            [{text: 'Yes', onPress: planDeleter.bind(this, indexOfItem)}, {text: 'No', style: 'cancel'}]
        );
    };

    const updatingArray = (plansIndex, planList) => {
        const newArrayofPlans = [];

        planList.forEach(element => {
            if (planList[plansIndex]!==element) {
                newArrayofPlans.push(element);
            }
        });

        return newArrayofPlans
    };

    const planDeleter = async(planIndex) => {
        const newPlanArray = updatingArray(planIndex, listOfPlans);
        await removeItem(newPlanArray);
        fetchingData();
    };

    const randomKey = () => {
        const randomNumber = Math.random(0, 1000);
        return randomNumber;
    };

    const planPageSender = itemIndex => {
        setIsDisplayMode(true);
        currentPlanRN = listOfPlans[itemIndex];
        setCurrentPlan(currentPlanRN);
    };

    return (
        <View style={styles.screen}>
            <StatusBar style='auto'/>
            <TouchableOpacity style={styles.adder} onPress={() => setIsAddMode(true)}>
                <Text style={styles.adderText}>Add a Dream Plan</Text>
            </TouchableOpacity>
            <View style={{backgroundColor: Colors.primary, width: '90%', height: 2, marginBottom: 20}}></View>
            <View style={{marginBottom: 10}}><Text>Hold Dream Plans To Delete Them</Text></View>
            { anythingThere===false ?
                <View style={styles.nothingThere}>
                    <Text style={styles.nothingText}>You Have No Dream Plans!</Text>
                </View>
                :
                <ScrollView>
                    {listOfPlans.map((planItem, planItemIndex=randomKey()) => {
                        return <Plan
                                key={planItemIndex}
                                planNumber={planItemIndex + 1}
                                sendToPlanPage={() => planPageSender(planItemIndex)}
                                confirmDelete={() => confirmDeleteHandler(planItemIndex)}
                                />;
                    })
                    }
                </ScrollView>
            }
            <ModalView visible={isAddMode} changeVisibility={changeVisibilityHandler}/>
            <PlanDisplay visible={isDisplayMode} currentPlan={currentPlan} closeModal={closeModalHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 15,
        paddingHorizontal: 15
    },
    adder: {
        marginVertical: 20,
        backgroundColor: Colors.accentOne,
        padding: 10,
        borderRadius: 20,
        maxWidth: '80%'
    },
    adderText: {
        fontSize: 30
    },
    nothingThere: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nothingText: {
        fontSize: 40,
        textAlign: 'center',
        color: Colors.accentTwo
    }
});

export default GoalListScreen;