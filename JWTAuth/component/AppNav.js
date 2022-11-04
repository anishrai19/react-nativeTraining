import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
// import Registration from './mainScreen/registration/Registration';
// import Login from './mainScreen/login/Login';
import UserScreen from '../component/userScreen/UserScreen';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../context/authContext';
import MainScreen from './mainScreen/MainScreen';

// const Stack = createNativeStackNavigator();

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
    )
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <UserScreen /> : <MainScreen />}
    </NavigationContainer>
  );
};

export default AppNav;
