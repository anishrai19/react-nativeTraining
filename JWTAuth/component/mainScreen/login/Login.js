import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

// import { TextInput } from 'react-native-paper';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Login_logo from '../../../assets/login_logo.webp';
import google from '../../../assets/google.png';
import facebook from '../../../assets/Facebook_Logo.png';
import tweeter from '../../../assets/tweeter.png';
import {AuthContext} from '../../../context/authContext';

const Login = ({navigation}) => {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  const data = [
    {key: '1', value: 'Admin'},
    {key: '2', value: 'Manager'},
    {key: '3', value: 'User'},
  ];

  const [selected, setSelected] = useState('');

  const {login, email, setEmail, password, setPassword} =
    useContext(AuthContext);

  return (
    <SafeAreaView style={{justifyContent: 'center', backgroundColor: '#fff'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={Login_logo}
          style={{height: 300, width: 400, marginTop: 40}}
          resizeMode="contain"
        />
        <View style={{marginTop: 20, width: 260}}>
          {/* <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 28,
              fontWeight: '500',
              color: 'black',
              marginBottom: 30,
            }}>
            Login
          </Text> */}
          <TextInput
            label={'Email ID'}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              marginBottom: 10,
              height: 40,
            }}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="email id"
            keyboardType="email-address"
          />
          <TextInput
            label={'Password'}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              marginBottom: 10,
              height: 40,
              backgroundColor: 'white',
            }}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="password"
            inputType="password"
            fieldButtonLabel={'Forgot?'}
            fieldButtonFunction={() => {}}
          />
          {/* <Text>{text}</Text> */}
          <SelectList
            setSelected={setSelected}
            data={data}
            boxStyles={{
              borderRadius: 0,
              borderWidth: 1,
              borderColor: 'black',
              marginBottom: 10,
            }}
            dropdownStyles={{borderRadius: 0, marginBottom: 10}}
            dropdownTextStyles={{color: 'black'}}
          />

          <Button
            title="Login"
            onPress={() => {
              login();
            }}
          />

          <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
            Or, login with ...
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 30,
            }}>
            <TouchableOpacity onPress={() => {}} style={styles.iconcontainer}>
              <Image source={google} style={{height: 24, width: 24}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconcontainer}>
              <Image source={facebook} style={{height: 24, width: 24}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconcontainer}>
              <Image source={tweeter} style={{height: 24, width: 24}} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>New to the app?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}>
                {' '}
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  iconcontainer: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
