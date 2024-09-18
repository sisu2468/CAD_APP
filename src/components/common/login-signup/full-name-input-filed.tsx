import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';

type Props = {
  username?: string;
  onChange?: (value: string) => void;
};

const FullNameInputField = ({username, onChange}: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <Icon name="user" size={22} color={'#9D9D9D'} />
      <TextInput
        style={styles.input}
        value={username}
        placeholder={t('person.fullname')}
        onChangeText={value => {
          if (onChange) onChange(value);
        }}
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
