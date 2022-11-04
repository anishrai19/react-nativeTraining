import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
// import AdvertSection from './component/Body/AdvetisementCard/AdvertSection';

const App = () => {
  return (
    <View style={{backgroundColor:'red'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <Body />
      {/* <AdvertSection /> */}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
