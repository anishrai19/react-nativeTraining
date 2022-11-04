import {StyleSheet, Text, View, SafeAreaView, ScrollView,Image} from 'react-native';
import React from 'react';
import PlanDetails from './Card/PlanDetails';
// import Card2 from '../../assets/Card/card2.png';
// import Card3 from '../../assets/Card/card4.png';
import IconItem from './Icons/IconItem';
import AdvertSection from './AdvetisementCard/AdvertSection';
import Releasecontainer from './NewReleases/Releasecontainer';
import ChannelContainer from './NewsChannel/ChannelContainer';
import SongContainer from './Music/SongContainer';
import GameContainer from './Game/GameContainer';

const Body = () => {
  return (
   
    <View style={styles.bodycontainer}>
     <ScrollView>
      <PlanDetails />
      <IconItem />
      <AdvertSection />
      <Releasecontainer />
      <ChannelContainer />
      <SongContainer />
      <GameContainer />
    </ScrollView>
    </View>
    
  );
};

export default Body;

const styles = StyleSheet.create({
  bodycontainer: {
    backgroundColor: '#fcfbe1',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  card2:{
    borderRadius:20,
    marginRight:20,
    height:300,
    // width:300,
    marginTop:30,
  }
});
