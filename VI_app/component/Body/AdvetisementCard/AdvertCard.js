import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const AdvertCard = ({Heading, Subheading, type}) => {
  // console.log(props.type);
  return (
    <View style={{margin: 20}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={type}
          resizeMode="cover"
          style={styles.imagestyle}
        />
      </View>
      <View style={styles.textstyle} elevation={5}>
       <Text style={{ color: 'black',textAlign: 'center',fontWeight:'800'}} >{Heading}</Text>
       <Text style={{color:'black',textAlign:'center'}}>{Subheading}</Text>
      </View>
    </View>
  );
};

export default AdvertCard;

const styles = StyleSheet.create({
  imagestyle:{
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    width: 170, 
    height: 60, 
    justifyContent: 'center',
  },
  textstyle:{
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    width:170,
    height:60,
    justifyContent:'center',
    backgroundColor:'#ffffff',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
   
  }
});
