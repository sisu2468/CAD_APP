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

const defaultprofileImage = require('../../../assets/images/avatar.png')
const logoImage = require('../../../assets/images/Delite_logo.png')
const previousButton = require('../../../assets/images/ep_back.png')


const UserInfo = ({ navigation, route }: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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

  const handleCountrySelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
    setShowCountryPicker(false);
  };

  // Handle date change
  const onChange = (event, date) => {
    setShowPicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
      setBirthDate(date.toISOString().split('T')[0]); // Format date as YYYY-MM-DD
    }
  };

  // Show date picker
  const showDatePicker = () => {
    setShowPicker(true);
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
      <View style={styles.status}>
        <TouchableOpacity style={styles.previousstyle} onPress={() => navigation.goBack()}>
          <Image source={previousButton} style={styles.previousButton} />
          <View style={styles.headertextContainer}>
            <Text style={styles.headertext}>Personal Information</Text>
          </View>
        </TouchableOpacity>
      </View>

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
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder='Email Address'
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={styles.phoneInputContainer}>
            <CountryPicker
              withCallingCode
              withFilter
              withFlag
              countryCode={countryCode}
              onSelect={handleCountrySelect}
              visible={showCountryPicker}
              onClose={() => setShowCountryPicker(false)}
            />
            <TextInput
              style={styles.countryCodeInput}
              value={callingCode}
              editable={false} // Prevent user from editing the country code manually
            />
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Company Name"
            value={companyName}
            onChangeText={setCompanyName}
          />
          <TextInput
            style={styles.input}
            placeholder="Birthdate"
            value={birthDate}
            onFocus={showDatePicker} // Show date picker when input is focused
          />

          {showPicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Payment"
            value={cost}
            onChangeText={setCost}
            editable={false}
            selectTextOnFocus={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Created Date"
            value={createdate}
            onChangeText={setCreateDate}
            editable={false}
            selectTextOnFocus={false}
          />

          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateButtonText}>Update</Text>
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
