import { StyleSheet, Text,Image,View } from 'react-native'
import React from 'react'

const Menuitem = ({name, icon}) => {
  return (
    <View style={{margin:20}}>
       <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Image source={icon} style={{width: 40, height: 40,justifyContent:'center'}} />
      </View>
        <Text style={{color:'white',textAlign:'center'}}>{name}</Text>
    </View>
  )
}

export default Menuitem

const styles = StyleSheet.create({
   
})