import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Song = ({image, title}) => {
    // console.log(title)
  return (
    <View style={{margin: 10}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={image} resizeMode="cover" style={styles.imagestyle} />
        <Text style={{color:'black'}}>{title}</Text>
      </View>
    </View>
  );
};

export default Song;

const styles = StyleSheet.create({
  imagestyle: {
    borderRadius: 10,
    width: 170,
    height: 180,
    justifyContent: 'center',
  },
  textstyle: {
    // position: 'absolute',
    fontSize: 80,
    borderColor: 'red',
    color: 'black',
    top: -24,
    left: -19,
    textShadowColor: 'orange',
    textShadowOffset: {
      width: 5,
      height: 3,
    },
    textShadowRadius: 10,
    //  borderWidth:1,
    //  borderColor:'red',
  },
});
