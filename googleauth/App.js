import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '115896426093-u1tl7uopi9b9mp7t47p1sok3huta9q0s.apps.googleusercontent.com',
  offlineAccess: true,
});

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGoogleInfo: {},
      loaded: false,
    };
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo: userInfo,
        loaded: true,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <View>
        <GoogleSigninButton
          onPress={this.signIn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          style={{width: 100, height: 100}}
        />
        {this.state.loaded ? (
          <View>
            <Text>{this.state.userGoogleInfo.user.name}</Text>
            <Text>{this.state.userGoogleInfo.user.email}</Text>
            <Image
              style={{width: '100', height: '100'}}
              source={{uri: this.state.userGoogleInfo.user.photo}}
            />
          </View>
        ) : (
          <Text>Not signIn</Text>
        )}
      </View>
    );
  }
}

export default App;
