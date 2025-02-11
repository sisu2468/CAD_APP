import {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
import { useTranslation } from 'react-i18next';

type Props = {
  password?: string;
  onChange?: (value: string) => void;
  isInvalid?: boolean;
};

const PasswordInputField = ({password, onChange, isInvalid = false}: Props) => {
  const [isHide, setIsHide] = useState<boolean>(true);

  const onPress = () => {
    setIsHide(!isHide);
  };
  const { t, i18n } = useTranslation();

  return (
    <View
      style={[
        styles.container,
        {borderColor: isInvalid ? '#FF0000' : '#E5E5E5'},
      ]}>
      <Icon name="key" size={22} color={'#9D9D9D'} style={styles.icon} />
      <TextInput
        value={password}
        onChangeText={value => {
          if (onChange) onChange(value);
        }}
        style={[styles.input, {color: isInvalid ? '#FF0000' : '#000'}]}
        placeholder={t('signinfo.pwd')}
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={isHide}
      />
      <TouchableOpacity onPress={onPress}>
        {isHide ? (
          <Icon name="eye" size={22} color={'#9D9D9D'} />
        ) : (
          <Icon name="eye-closed" size={22} color={'#9D9D9D'} />
        )}
      </TouchableOpacity>
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
    fontWeight: 'medium',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    fontSize: 17,
  },
  icon: {
    transform: [{scaleX: -1}, {rotate: '45deg'}],
  },
});

export default PasswordInputField;
