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

const passwordImage = require('../../../assets/images/circum_unlock.png')

import Icon from 'react-native-vector-icons/Octicons';
import MailInputField from 'components/common/login-signup/mail-input-filed';
import PasswordInputField from 'components/common/login-signup/password-input-field';
import PasswordConfrimInputField from 'components/common/login-signup/password-confirm-input-field';

type Props = {
  navigation?: any;
  handleSSOWithGoogle?: () => void;
  handleInputChange: (field: string, value: string) => void;
  email: string;
  password: string;
  confirmPassword: string;
};

const UserPassword = ({ navigation, route, password, confirmPassword, handleInputChange}: any) => {
  const { t, i18n } = useTranslation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);
  const [isNotPasswordMatching, setIsNotPasswordMatching] =
    useState<boolean>(false);

  const handleUpdate = () => {

  }
  const handlePasswordChange = (text: string) => {
    handleInputChange('password', text);
    setIsPasswordWeak(false);

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(text)) {
      setIsPasswordWeak(true);
      return;
    }
  };

  const handlePasswordConfirmChange = (text: string) => {
    handleInputChange('confirmPassword', text);
    setIsNotPasswordMatching(false);

    if (password !== text) {
      setIsNotPasswordMatching(true);
      return;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('pwd.pwd')}  navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Icon name="key" size={50} color={'#9D9D9D'} style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.label}>{t('person.email')}</Text>
          <MailInputField
            email={email}
            // onChange={handleEmailChange}
            isInvalid={isInvalidEmail}
          />

          <Text style={styles.label}>{t('pwd.currentpwd')}</Text>
          <PasswordInputField
            password={password}
            onChange={handlePasswordChange}
            isInvalid={isPasswordWeak}
          />
          <Text style={styles.label}>{t('pwd.newpwd')}</Text>
          <PasswordInputField
            password={password}
            onChange={handlePasswordChange}
            isInvalid={isPasswordWeak}
          />

          <Text style={styles.label}>{t('pwd.confirmpwd')}</Text>
          <PasswordConfrimInputField
            confirmPassword={confirmPassword}
            onChange={handlePasswordConfirmChange}
            isInvalid={isNotPasswordMatching}
          />
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateButtonText}>{t('pwd.changepwd')}</Text>
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
  },
  icon: {
    transform: [{scaleX: -1}, {rotate: '45deg'}],
    marginTop: 30,
    // marginBottom: 30,
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
    marginTop: 40,
  },
  updateButtonText: {
    color: '#ffffff',
    fontSize: 19,
  },
})

export default UserPassword;
