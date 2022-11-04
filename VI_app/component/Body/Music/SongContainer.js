import {StyleSheet, Text, View,SafeAreaView,ScrollView} from 'react-native';
import React from 'react';
import Song from './Song';
import Icon from 'react-native-vector-icons/FontAwesome';
import SongList from '../../../Data/Song';

const SongContainer = () => {
  return (
    <View style={{backgroundColor: '#fcfbe1'}}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical:20,
        }}>
        <View>
          <Text style={{color: 'black', fontWeight: '800', fontSize: 20}}>
            trending music
          </Text>
        </View>
        <View style={styles.iconstyle}>
          <Icon name="angle-right" size={20} color="black" />
        </View>
      </View>
      <View>
        <SafeAreaView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {SongList.map((item, index) => {
              return (
                <Song image={item.image} title={item.title} key={index} />
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default SongContainer;

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
