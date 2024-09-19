
import React, { useState, useEffect, useContext } from 'react';
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';  // Use FontAwesome or other icon set
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useTranslation } from 'react-i18next';
import DateTimePicker from '@react-native-community/datetimepicker';
import { UserContext } from '../userContext';
type Props = {
  birthdate?: Date;
  onChange?: (value: Date) => void;
};

const BirthDateInputField = ({ birthdate, onChange }: Props) => {
  const { t } = useTranslation();
  const { userData } = useContext(UserContext);

  // Initialize selected date with the provided birthdate or userData's birthdate or today's date
  const [selectedDate, setSelectedDate] = useState<Date>(birthdate || new Date(userData?.birthdate || new Date()));
  const [showPicker, setShowPicker] = useState(false);

  const handleBirthdayChange = (event, date?: Date) => {
    setShowPicker(false); // Hide picker after selection
    if (date) {
      setSelectedDate(date);
      if (onChange) {
        onChange(date); // Call parent's onChange function with the new date
      }
    }
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <Icon name="calendar" size={22} color="#9D9D9D" />
      <TextInput
        style={styles.input}
        placeholder={t('person.birthdate')}
        autoCapitalize="none"
        value={selectedDate.toISOString().split('T')[0]} // Format date as YYYY-MM-DD
        onFocus={showDatePicker} // Show date picker when input is focused
      />
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleBirthdayChange}
        />
      )}
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

export default BirthDateInputField;
