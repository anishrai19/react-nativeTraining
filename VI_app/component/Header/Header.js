import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menuitem from './Menuitem';
import Data from '../../Data/Data';

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.userNameContainer}>
          <View style={{marginLeft: 20, marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 15, letterSpacing: 1}}>
              Anish <Icon name="angle-down" size={30} color="white" />
            </Text>
            <Text style={styles.namenum}> 8858740460</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.textsty}> win a </Text>
            <Text style={styles.textsty}>smartwatch! </Text>
          </View>
        </View>
        <SafeAreaView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Data.map((item, index) => {
              return <Menuitem name={item.name} icon={item.icon} key={index} />;
            })}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#E83A14',
  },

  userNameContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textsty: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 1,
  },
  headerRight: {
    marginRight: 5,
    // backgroundColor: '#e91e45',
    padding: 5,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#354259',
  },
  namenum: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    // letterSpacing: 1,
  },
  menubox: {
    margin: 40,
  },
});
