import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Channel from './Channel';
import Icon from 'react-native-vector-icons/FontAwesome';
import ChannelData from '../../../Data/Channel';

const ChannelContainer = () => {
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
        <Text style={{color: 'black',fontWeight:'800', fontSize:20}}>news channels live</Text>
      </View>
      <View style={styles.iconstyle}>
        <Icon name="angle-right" size={20} color="black" />
      </View>
    </View>
    <View>
      <SafeAreaView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {ChannelData.map((item, index) => {
            return (
              <Channel image={item.image} logo={item.logo} key={index} />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  </View>
  )
}

export default ChannelContainer

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
})