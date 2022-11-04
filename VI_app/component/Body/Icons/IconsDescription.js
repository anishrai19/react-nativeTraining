import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon2 from 'react-native-vector-icons/FontAwesome5'

const IconsDescription = ({name, type}) => {
  // console.log('hiis');
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer} elevation={5}>
        <Icon name={type} size={30} color="red" />
      </View>
      <Text style={{textAlign: 'center', marginTop: 10, color: 'black'}}>
        {name}
      </Text>
    </View>
  );
};

export default IconsDescription;

const styles = StyleSheet.create({
  container: {
    width: 80,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    width: 70,
    height: 70,
    marginLeft: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
