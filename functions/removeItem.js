import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeItem = async(newPlanArray) => {
    try {
        await AsyncStorage.removeItem('plans');
        if (newPlanArray.length>0) {
            try {
                await AsyncStorage.setItem('plans', JSON.stringify(newPlanArray));
            } catch (error) {
                console.log('error at setting for new');
            }
        }
    } catch (error) {
        console.log('error at removing whole thing part');
    }
};