import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import CountryPicker from 'react-native-country-picker-modal';

const FullNameInputField = ({phoneNumber, setPhoneNumber}: any) => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState('');
  const [countryCode, setCountryCode] = useState('JP');
  const [callingCode, setCallingCode] = useState('+81');
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleCountrySelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
    setShowCountryPicker(false);
  };

  return (
    <View style={styles.container}>
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
        style={styles.countrycode}
        value={callingCode}
        editable={false} // Prevent user from editing the country code manually
      />
      <TextInput
        style={styles.input}
        placeholder={t('person.phone')}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    fontWeight: 'medium',
    fontSize: 17,
  },
  countrycode: {
    height: 40,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  }
});

export default FullNameInputField;
