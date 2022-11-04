import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Offer from '../../../assets/Card/card1.png';
import Card2 from '../../../assets/Card/card2.png';
import Card3 from '../../../assets/Card/card4.png';

const PlanDetails = () => {
  const Data = [
    {
      title: 'item1',
    },
    {
      title: 'item2',
    },
    {
      title: 'item3',
    },
  ];
  // const [currentDate, setCurrentDate] = useState('');

  // useEffect(() => {
  //   var date = new Date().getDate();
  //   setCurrentDate(date);
  // }, []);

  // const Item = ({title}) => (
  //   <View>
  //     <Text style={{color:'black'}}>{title}</Text>
  //   </View>
  // );

  // const renderItem = ({item}) => <Item title={item.title} />;
  return (
    // <SafeAreaView style={styles.safe}>
    //   <FlatList data={Data} renderItem={renderItem} />
    // </SafeAreaView>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.card1} elevation={5}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <View style={{flexDirection: 'row', top: -10}}>
              <Text style={{fontSize: 40, fontWeight: '800', color: '#000'}}>
                3.5
              </Text>
              <Text style={{top: 25, color: '#000'}}>GB</Text>
            </View>
            <Text style={{top: -8, color: 'black'}}> Data Left</Text>
            
            {/* <FlatList
              data={Data}
              renderItem={({item}) => (
                <Text style={{color:'red'}}>{item.title}</Text>
              )}
            /> */}

          </View>
          <View>
            <Text
              style={{textAlign: 'right', fontWeight: '500', color: 'black'}}>
              Truly
            </Text>
            <Text style={{fontWeight: '500', color: 'black'}}>
              unlimited calls
            </Text>
          </View>
        </View>
        <View>
          <Text style={{marginVertical: 15, fontWeight: '500', color: 'black'}}>
            {/* {currentDate} */}
            Pack valid till 10 Nov, 2022
          </Text>
          {/* <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={{color:'red'}}>{item.key}</Text>}
      /> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: '500',
          }}>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>recharge now</Text>
          </TouchableOpacity>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontWeight: '500',
              color: 'black',
            }}>
            pack details
          </Text>
        </View>
        <View>
          <Image source={Offer} style={styles.offer} />
        </View>
      </View>
      <Image source={Card2} style={styles.card2} />
      <Image source={Card3} style={styles.card2} />
    </ScrollView>
  );
};

export default PlanDetails;

const styles = StyleSheet.create({
  safe: {
    height: 50,
    width: 50,
  },
  card1: {
    margin: 15,
    marginTop: 30,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    width: 300,
    height: 300,
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#E83A14',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 150,
  },
  appButtonText: {
    // fontSize: 18,
    color: '#fff',
    // fontWeight: "bold",
    alignSelf: 'center',
  },
  offer: {
    marginTop: 20,
    height: 80,
    width: '100%',
    borderRadius: 20,
  },
  card2: {
    borderRadius: 20,
    marginRight: 20,
    height: 300,
    // width:300,
    marginTop: 30,
  },
});
