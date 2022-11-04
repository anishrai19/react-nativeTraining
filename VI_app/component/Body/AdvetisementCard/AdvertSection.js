import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AdvertiseData from '../../../Data/AdvertiseData';
import AdvertCard from './AdvertCard';

const AdvertSection = () => {
  return (
    <View style={{backgroundColor: '#fcfbe1'}}>
      <View>
        <SafeAreaView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {AdvertiseData.map((item, index) => {
              return (
                <AdvertCard Heading={item.Heading} Subheading={item.Subheading} type={item.image} key={index} />
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default AdvertSection;

const styles = StyleSheet.create({
  card1: {
    margin: 15,
    marginTop: 30,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    width: 200,
    height: 150,
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
