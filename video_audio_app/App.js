import {StyleSheet, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const App = () => {
  const onBuffer = data => {
    console.log('on buffering', data);
  };
  const videoError = data => {
    console.log('videoError', data);
  };
  return (
    <View>
      <Video
        source={require('./assets/video/video.mp4')}
        onBuffer={onBuffer}
        onError={videoError}
        resizeMode="cover"
        style={styles.backgroundVideo}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
  },
});
