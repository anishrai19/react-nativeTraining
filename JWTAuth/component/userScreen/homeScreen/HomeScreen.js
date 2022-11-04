import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../../context/authContext';

const HomeScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Welcome Anish </Text>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{marginTop: 10, backgroundColor: '#0991eb', padding: 10}}>
          <Text style={{color: 'white', textAlign: 'center'}}>LogOut</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require('../../../assets/welcome.webp')}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
