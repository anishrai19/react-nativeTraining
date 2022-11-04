import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
// import { Jwt } from 'jsonwebtoken';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setisLoading] = useState(false);
  const [userToken, setuserToken] = useState(null);
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null)


  const login = () => {
    // const token = jwt.sign({userId:login._id},"MY_SECRET_KEY")
   console.log(email,password);
    setisLoading(true);
    axios
      .post('http://localhost:3000/login', {
        email,
        password,
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(`login error ${e}`);
      });
    // setuserToken('djfvjgui');
    // AsyncStorage.setItem('userToken', 'djfvjgui');
    setisLoading(false);
  };

  const logout = () => {
    setisLoading(true);
    setuserToken(null);
    AsyncStorage.removeItem('userToken');
    setisLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setisLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setuserToken(userToken);
      setisLoading(false);
    } catch (e) {
      console.log(`logged in error occur ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        email,
        setEmail,
        password,
        setPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
