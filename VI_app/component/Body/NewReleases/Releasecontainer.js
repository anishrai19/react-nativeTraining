import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Movies from './Movies';
import NewRelease from '../../../Data/NewRelease';
import Icon from 'react-native-vector-icons/FontAwesome';
const Releasecontainer = () => {
  return (
    <View style={{backgroundColor: '#fcfbe1'}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <View>
          <Text style={{color: 'black',fontWeight:'800',fontSize:20}}>new releases</Text>
        </View>
        <View style={styles.iconstyle}>
          <Icon name="angle-right" size={20} color="black" />
        </View>
      </View>
      <View>
        <SafeAreaView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {NewRelease.map((item, index) => {
              return (
                <Movies image={item.image} number={item.number} key={index} />
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Releasecontainer;

const styles = StyleSheet.create({
  iconstyle: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign:'right',
  },
});
