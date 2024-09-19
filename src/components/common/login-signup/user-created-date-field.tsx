import React, { useState, useEffect, useContext } from 'react';
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { UserContext } from 'components/common/userContext';

const FullNameInputField = () => {
  const { t, i18n } = useTranslation();
  const [createdate, setCreateDate] = useState('');
  const { userData }  = useContext(UserContext);
  
  const [inputValue, setInputValue] = useState<Date>(
    userData?.createdate ? new Date(userData.createdate) : new Date()
  );
  
  return (
    <View style={styles.container}>
      <Icon name="calendar-outline" size={22} color={'#9D9D9D'} />
      <TextInput
        style={styles.input}
        placeholder={t('person.createdate')}
        value={inputValue.toISOString().split('T')[0]} // Format date as YYYY-MM-DD
        editable={false}
        selectTextOnFocus={false}
        autoCapitalize="words"
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
});

export default FullNameInputField;
