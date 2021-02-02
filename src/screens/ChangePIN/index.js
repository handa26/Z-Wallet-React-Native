import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import OTPField from 'react-native-otp-field';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ChangePassword from '../ChangePassword';

const ChangePIN = ({navigation}) => {
  //   const API_URL = 'http://192.168.1.2:8000';
  const [pin, setPin] = useState('');

  //   const token = useSelector((state) => state.authReducer.token);
  //   console.log("ini token", token);

  //   const handlePin = () => {
  //     const data = {
  //       PIN: pin,
  //     };

  //     const config = {
  //       headers: {
  //         'x-access-token': 'bearer ' + token,
  //       },
  //     };

  //     axios.patch(API_URL + '/auth/PIN', data, config).then((res) => {
  //       console.log("berhasil update PIN", res.data)
  //       navigation.replace('PinSuccess')
  //     }).catch((err) => {
  //       console.log(err.response.data)
  //       console.log("error disokin", err)
  //     })
  //   };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6379F4"
          translucent={true}
        />
        <View style={styles.header2}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginTop: 20}}>
              <Icon name="arrow-left" color="white" size={30} />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 20,
                color: 'white',
                fontSize: 20,
                fontWeight: '700',
                lineHeight: 30,
              }}>
              Change PIN
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.subContent}>
            {/* <Text style={styles.header}>Create Security PIN</Text> */}
            <Text style={styles.subHeader}>
              Enter your current 6 digits Zwallet PIN below to
            </Text>
            <Text style={styles.subHeader}>continue to the next steps</Text>
          </View>
          <View style={styles.form}>
            <OTPField length={6} value={pin} onChange={(pin) => setPin(pin)} />
          </View>
        </View>
      </ScrollView>
      <View style={{marginBottom: 25}}>
        <TouchableOpacity
          style={pin.length === 6 ? styles.btnActive : styles.btn}
          onPress={() => {
              navigation.navigate('NewPIN')
          }}
        >
          <Text style={pin.length === 6 ? styles.textActive : styles.textNon}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    // marginBottom: 50,
    color: '#6379F4',
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 26,
    fontWeight: 'bold',
  },
  header2: {
    width: '100%',
    height: 110,
    padding: 20,
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    paddingBottom: 30,
    padding: 15,
    // backgroundColor: 'white',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // borderTopWidth: 0.5,
    // borderColor: '#EEEEEE',
    // elevation: 1,
    marginTop: 50,
  },
  subContent: {
    // marginTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 16,
    color: '#878787',
  },
  form: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  btn: {
    width: '90%',
    backgroundColor: '#DADADA',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  btnActive: {
    width: '90%',
    backgroundColor: '#6379F4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  textNon: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  textActive: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default ChangePIN;
