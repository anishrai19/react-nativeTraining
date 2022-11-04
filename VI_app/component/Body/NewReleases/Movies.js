import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';

const Movies = ({image,number}) => {
  return (
    <View style={{margin: 20}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={image} resizeMode="cover" style={styles.imagestyle} />
        <Text style={styles.textstyle}>{number}</Text>
      </View>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  imagestyle: {
    borderRadius:10,
    width: 170,
    height: 230,
    justifyContent: 'center',
  },
  textstyle:{
    position: 'absolute',
     fontSize: 80,
     borderColor:'red',
     color:'white',
     top:-24,
     left:-19,
     textShadowColor:'orange',
     textShadowOffset:{
        width:5,
        height:3
     },
     textShadowRadius:10,
    //  borderWidth:1,
    //  borderColor:'red',
  }
});
