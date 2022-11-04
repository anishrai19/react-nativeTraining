import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import React, {useState} from 'react';
// import {Dropdown} from 'react-native-material-dropdown';
// import SelectDropdown from 'react-native-select-dropdown';
import Login_logo from '../../../assets/login_logo.webp';
import SelectList from 'react-native-dropdown-select-list';

const Registration = ({navigation}) => {
  const data = [
    {key: '1', value: 'Admin'},
    {key: '2', value: 'Manager'},
    {key: '3', value: 'User'},
  ];

  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={{justifyContent: 'center', backgroundColor: '#fff' ,height:'100%'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={Login_logo}
          style={{height: 300, width: 400, marginTop: 40}}
          resizeMode="contain"
        />
        <View style={{marginTop: 40, width: 260}}>
          <TextInput
            label={'Email ID'}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              marginBottom: 10,
              height: 40,
            }}
            keyboardType="email-address"
            placeholder="Email id"
          />
          <TextInput
            label={'Password'}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              marginBottom: 10,
              height: 40,
            }}
            placeholder="Password"
            inputType="password"
            fieldButtonLabel={'Forgot?'}
            fieldButtonFunction={() => {}}
          />
          <SelectList
            setSelected={setSelected}
            data={data}
            boxStyles={{borderRadius: 0, borderWidth: 1, borderColor: 'black'}}
            dropdownStyles={{borderRadius: 0}}
            dropdownTextStyles={{color: 'black'}}
          />

          <TouchableOpacity
            onPress={() => {}}
            style={{marginTop: 10, backgroundColor: '#0991eb', padding: 10}}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Registration
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
              marginTop: 10,
            }}>
            <Text>Already User?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  iconcontainer: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
