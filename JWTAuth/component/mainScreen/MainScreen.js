import React from 'react';
import Registration from '../mainScreen/registration/Registration';
import Login from '../mainScreen/login/Login';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MainScreen = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Registration} name="Registration" />
    </Stack.Navigator>
    //   </NavigationContainer>
  );
};

export default MainScreen;
