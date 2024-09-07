import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const FullNameInputField = () => {
  const { t, i18n } = useTranslation();
  const [createdate, setCreateDate] = useState('');

  return (
    <View style={styles.container}>
      <Icon name="calendar-outline" size={22} color={'#9D9D9D'} />
      <TextInput
        style={styles.input}
        placeholder={t('person.createdate')}
        value={createdate}
        onChangeText={setCreateDate}
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
