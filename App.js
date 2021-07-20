//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './components/Header';
import WelcomeScreen from './screens/WelcomeScreen';
import GoalListScreen from './screens/GoalListScreen';

export default function App() {
  /*
  const removeItems = async() => {
    try {
      await AsyncStorage.removeItem('alreadyOpened');
    } catch (error) {
      console.log("error");
    }
  };
  
  removeItems();
  */
  
  const [alreadyOn, setAlreadyOn] = useState(false);

  const setOccurence = async() => {
    try {
      await AsyncStorage.setItem('alreadyOpened', 'in');
      getOccurence();
    } catch (error) {
      console.log("Error, error, can't load data into database");
    }
  };

  const getOccurence = () => {
    try {
      
      AsyncStorage.getItem('alreadyOpened').then(
        value => {if (value==='in') {setAlreadyOn(true);}}
      );

    } catch (error) {
      console.log("Error, error, can't retrieve data from database");
    }
  };

  getOccurence();

  let content = <WelcomeScreen onStartPress={setOccurence}/>;
  if (alreadyOn===true) {
    content = <GoalListScreen/>;
  }

  return (
    <View style={styles.screen}>
      <Header/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
