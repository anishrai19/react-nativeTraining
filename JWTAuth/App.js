import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Login from './component/login/Login';

import {AuthProvider} from './context/authContext';
import AppNav from './component/AppNav';

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
