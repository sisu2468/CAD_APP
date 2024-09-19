import React, { useState, useEffect, useContext } from 'react';
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import { UserContext } from 'components/common/userContext';

type Props = {
  username?: string;
  onChange?: (value: string) => void;
};

const FullNameInputField = ({ username, onChange }: Props) => {
  const { t } = useTranslation();
  const { userData } = useContext(UserContext);

  // Initialize state with userData.name or the provided username prop
  const [inputValue, setInputValue] = useState(username || userData?.name || '');

  // Handle input change
  const handleInputChange = (value: string) => {
    setInputValue(value);
    if (onChange) onChange(value); // Trigger onChange callback if provided
  };

  return (
    <View style={styles.container}>
      <Icon name="user" size={22} color={'#9D9D9D'} />
      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder={t('person.fullname')}
        onChangeText={handleInputChange} // Update value on text change
        autoCapitalize="none"
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
