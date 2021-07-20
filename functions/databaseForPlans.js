import AsyncStorage from '@react-native-async-storage/async-storage';

export const updateStorage = async(dreamValue, challengeValue, overcomeValue, attitudeValue, stepsValue) => {
    try {
        const userPlans = await AsyncStorage.getItem('plans');
        let cleanedUserPlans = [];
        if (userPlans!==null) {
            cleanedUserPlans = JSON.parse(userPlans);
            await AsyncStorage.removeItem('plans');
        }
        const currentPlan = [dreamValue, challengeValue, overcomeValue, attitudeValue, stepsValue];
        cleanedUserPlans.push(currentPlan);
        try {
            await AsyncStorage.setItem('plans', JSON.stringify(cleanedUserPlans));
        } catch (error) {
            console.log('error for setting item in after alert');
        }
    } catch (error) {
        console.log('error in getting or removing item in after alert');
    }
};