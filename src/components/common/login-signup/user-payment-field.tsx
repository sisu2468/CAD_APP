import React, { useState, useEffect, useContext } from 'react';
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import { UserContext } from 'components/common/userContext';

type Props = {
  credit?: number;
  fieldstatus?: boolean;
  onChange?: (value: number) => void;
};

const UserPaymentField = ({ credit, fieldstatus, onChange }: Props) => {
  const { t } = useTranslation();
  const { userData } = useContext(UserContext);

  // Initialize with credit prop or userData's credit
  const [inputValue, setInputValue] = useState<number>(credit || userData?.credit || 0);

  // Handle input change and convert string input to number
  const handleInputChange = (value: string) => {
    const numericValue = parseFloat(value) || 0; // Convert string to number, fallback to 0
    setInputValue(numericValue);
    if (onChange) onChange(numericValue); // Trigger onChange callback if provided
  };

  return (
    <View style={styles.container}>
      <Icon name="credit-card" size={22} color="#9D9D9D" />
      <TextInput
        style={styles.input}
        placeholder={t('person.credit')}
        value={inputValue.toString()} // Convert numeric value to string for TextInput
        onChangeText={handleInputChange} // Handle changes when field is editable
        autoCapitalize="none"
        editable={fieldstatus} // Control if the field is editable
        selectTextOnFocus={false}
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

export default UserPaymentField;
