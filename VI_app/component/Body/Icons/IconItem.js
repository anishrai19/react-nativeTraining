import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import React from 'react';
import IconsDescription from './IconsDescription';
import IconsType from '../../../Data/Icon';


const IconItem = () => {
  return (
      <SafeAreaView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {IconsType.map((item, index) => {
          return (
              <IconsDescription name={item.name} type={item.type} key={index} />
              )
             })
              }
          </ScrollView>
        </SafeAreaView>
  )}
export default IconItem

const styles = StyleSheet.create({})