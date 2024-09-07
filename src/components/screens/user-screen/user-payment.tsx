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
import Header from '../../../components/common/Theme/header';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';
import MailInputField from 'components/common/login-signup/mail-input-filed';
import UserPaymentField from 'components/common/login-signup/user-payment-field';

const previousButton = require('../../../assets/images/ep_back.png')
const usercost = require('../../../assets/images/yen_logo.png')

const UserPayment = ({ navigation, route, email }: any) => {
  const [cost, setCost] = useState('');

  const handlepayment = () => {
    navigation.navigate('Payment');
  }
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('payinfo.payment')}  navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* <Image source={usercost} style={styles.passwordImage}></Image> */}
        <Icon name="credit-card" size={100} color={'#9D9D9D'} style={styles.passwordImage} />

        <View style={styles.content}>
          <Text style={styles.label}>{t('person.email')}</Text>
          <MailInputField
            email={email}
          />

          <Text style={styles.label}>{t('payinfo.currentcredit')}</Text>
          <UserPaymentField />
          <TouchableOpacity style={styles.updateButton} onPress={handlepayment}>
            <Text style={styles.updateButtonText}>{t('payinfo.buycredit')}</Text>
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
    fontSize: 17,
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
    fontSize: 17,
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
