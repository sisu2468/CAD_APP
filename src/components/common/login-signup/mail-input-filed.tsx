import React, { useContext, useState } from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import { UserContext } from 'components/common/userContext';

type Props = {
  email?: string;
  onChange?: (value: string) => void;
  isInvalid?: boolean;
};

const MailInputField = ({email, onChange, isInvalid = false}: Props) => {
  const { t, i18n } = useTranslation();
  const { userData } = useContext(UserContext);

  const [inputValue, setInputValue] = useState(email || userData?.email || '');
  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (onChange) onChange(value); // Trigger onChange callback if provided
  };
  return (
    <View
      style={[
        styles.container,
        {borderColor: isInvalid ? '#FF0000' : '#E5E5E5'},
      ]}>
      <Icon name="mail" size={22} color={'#9D9D9D'} />
      <TextInput
        value={inputValue}
        onChangeText={handleInputChange} // Update value on text change
        style={[styles.input, {color: isInvalid ? '#FF0000' : '#000'}]}
        placeholder={t('person.email')}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
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
});

export default MailInputField;
