import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker from 'react-native-country-picker-modal';

const passwordImage = require('../../../assets/images/circum_unlock.png')
const previousButton = require('../../../assets/images/ep_back.png')
const usercost = require('../../../assets/images/yen_logo.png')

const UserPayment = ({ navigation, route }: any) => {
  const [cost, setCost] = useState('');
  const [email, setEmail] = useState('');

  const handlepayment = () => {
    navigation.navigate('Payment');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.status}>
        <TouchableOpacity style={styles.previousstyle} onPress={() => navigation.goBack()}>
          <Image source={previousButton} style={styles.previousButton} />
          <View style={styles.headertextContainer}>
            <Text style={styles.headertext}>Payment Management</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={usercost} style={styles.passwordImage}></Image>
        <View style={styles.content}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder='Email Address'
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Current Credit</Text>
          <TextInput
            style={styles.input}
            placeholder="Payment"
            value={cost}
            onChangeText={setCost}
            editable={false}
            selectTextOnFocus={false}
          />
          <TouchableOpacity style={styles.updateButton} onPress={handlepayment}>
            <Text style={styles.updateButtonText}>Buy the Credit</Text>
          </TouchableOpacity>    
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  status: {
    marginTop: 20,
    paddingLeft: 20,
    borderBottomColor: '#292929',
    borderBottomWidth: 0.5,
  },
  passwordImage: {
    marginTop: 30,
    marginBottom: 30,
    width: 100,
    height: 100,
  },
  content: {
    width: '100%',
  },
  previousstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headertext: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    fontWeight: '700',
    paddingBottom: 10,
  },
  previousButton: {
    width: 25,
    height: 25,
    marginBottom: 10,
  },
  scrollContent: {
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '100%',
    color: '#000000',
    fontSize: 17,
    fontWeight: '500',
  },
  updateButton: {
    backgroundColor: '#FF333C',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#ffffff',
    fontSize: 19,
  },
})

export default UserPayment;
