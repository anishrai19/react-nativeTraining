import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const GameItem = ({image, title}) => {
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

export default GameItem;

const styles = StyleSheet.create({
  imagestyle: {
    borderRadius: 10,
    width: 120,
    height: 120,
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
