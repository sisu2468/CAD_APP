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
import Header from '../../../components/common/Theme/header';
import { useTranslation } from 'react-i18next';

import LoginSignUpContainer from 'components/common/login-signup/login-signup-container';
import MailInputField from 'components/common/login-signup/mail-input-filed';
import CompanyInputField from 'components/common/login-signup/companyname-input-filed';
import BirthdateInputField from 'components/common/login-signup/birthdate-input-filed';
import PasswordInputField from 'components/common/login-signup/password-input-field';
import SSOWithGoogle from 'components/common/login-signup/google-sso';
import FullNameInputField from 'components/common/login-signup/full-name-input-filed';
import PasswordConfrimInputField from 'components/common/login-signup/password-confirm-input-field';
import PhoneNumberInputField from 'components/common/login-signup/phone-number-input-field';
import UserPaymentField from 'components/common/login-signup/user-payment-field';
import UserCreatedDateField from 'components/common/login-signup/user-created-date-field';

const defaultprofileImage = require('../../../assets/images/avatar.png')
const logoImage = require('../../../assets/images/Delite_logo.png')
const previousButton = require('../../../assets/images/ep_back.png')

type Props = {
  navigation?: any;
  handleSSOWithGoogle?: () => void;
  handleInputChange: (field: string, value: string) => void;
  email: string;
  companyname: string;
  password: string;
  confirmPassword: string;
};

const UserInfo = ({
  navigation,
  handleSSOWithGoogle,
  handleInputChange,
  email,
  companyname,
  password,
  confirmPassword,
}: Props) => {
  const { t, i18n } = useTranslation();

  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
  const [isInvalidcompanyname, setIsInvalidCCompanyName] = useState<boolean>(false);
  const [isUserDuplicated, setIsUserDuplicated] = useState<boolean>(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);
  const [isNotPasswordMatching, setIsNotPasswordMatching] =
    useState<boolean>(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cost, setCost] = useState('');
  const [createdate, setCreateDate] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [countryCode, setCountryCode] = useState('JP');
  const [callingCode, setCallingCode] = useState('+81');
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleEmailChange = (text: string) => {
    handleInputChange('email', text);
    setIsInvalidEmail(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(text)) {
      setIsInvalidEmail(true);
      return;
    }
  };

  // Function to handle image selection
  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 500,
      maxWidth: 500,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source);
      }
    });
  };

  const handleUpdate = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('userinfo')}  navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={handleSelectImage}>
            {profileImage ? (
              <Image source={profileImage} style={styles.profileImage} />
            ) : (
              <Image source={logoImage} style={styles.profileImage} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <FullNameInputField />
          <MailInputField
            email={email}
            onChange={handleEmailChange}
            isInvalid={isInvalidEmail}
          />
          
          <CompanyInputField />
          <BirthdateInputField />
          <PhoneNumberInputField />
          <UserPaymentField />
          <UserCreatedDateField />
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateButtonText}>{t('update')}</Text>
          </TouchableOpacity>        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  status: {
    marginTop: 20,
    paddingLeft: 20,
    borderBottomColor: '#292929',
    borderBottomWidth: 0.5,
  },
  previousstyle: {
    flexDirection: 'row', // Aligns the image and text horizontally
    alignItems: 'center', // Centers the image and text vertically
    justifyContent: 'center', // Centers content horizontally
  },
  headertextContainer: {
    flex: 1, // Takes up remaining space after the image
    justifyContent: 'center', // Centers text vertically within this container
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  profileImageContainer: {
    marginBottom: 40,
    marginTop: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 60,
    resizeMode: 'cover',
    borderWidth: 2,
    borderBlockColor: '#ff3300',
  },
  uploadText: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '800',
  },
  form: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '100%',
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    borderBlockColor: '#ffffff',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryCodeInput: {
    width: 70,
    borderColor: '#000',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
    height: 40,
    justifyContent: 'center',
    textAlign: 'center',
  },
  phoneNumberInput: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10,
    height: 40,
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
});

export default UserInfo;
