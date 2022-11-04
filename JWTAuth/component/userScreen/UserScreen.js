import React from 'react';
import HomeScreen from './homeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
    </Stack.Navigator>
  );
};

export default UserScreen;
