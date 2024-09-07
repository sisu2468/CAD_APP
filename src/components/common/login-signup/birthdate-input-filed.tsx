
import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';  // Use FontAwesome or other icon set
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useTranslation } from 'react-i18next';
import DateTimePicker from '@react-native-community/datetimepicker';

const BirthDateInputField = () => {
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, date) => {
    setShowPicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
      setBirthDate(date.toISOString().split('T')[0]); // Format date as YYYY-MM-DD
    }
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <Icon name="calendar" size={22} color={'#9D9D9D'} />
      <TextInput
        style={styles.input}
        placeholder={t('person.birthdate')}
        autoCapitalize="none"
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
