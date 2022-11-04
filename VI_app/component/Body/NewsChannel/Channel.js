import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Channel = ({image, logo}) => {
  return (
    <View style={styles.NewsItemContainer}>
      <View style={styles.NewsImageContainer}>
        <View style={styles.NewsImageSubContainer}>
          <Image source={image} resizeMode="cover" style={styles.NewsImage} />
        </View>
      </View>
      <View style={styles.NewsTextContainer}>
        <Text style={styles.NewsText}>{logo}</Text>
      </View>
    </View>
  );
};

export default Channel;

const styles = StyleSheet.create({
  NewsItemContainer: {
    margin: 10,
  },
  NewsImageContainer: {
    height: 150,
    width: 150,
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  NewsImageSubContainer: {
    height: 110,
    width: 110,
    backgroundColor: '#eab676',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  NewsImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  NewsTextContainer: {
    backgroundColor: 'red',
    width: 50,
    height: 25,
    marginTop: -50,
    marginLeft: 50,
    borderRadius: 10,
  },
  NewsText: {
    // fontSize: 20,
    color: '#fff',
    textShadowColor: 'orange',
    textShadowOffset: {width: 7, height: 2},
    textShadowRadius: 10,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});
