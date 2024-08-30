import {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

type Props = {
  confirmPassword?: string;
  onChange?: (value: string) => void;
  isInvalid?: boolean;
};

const PasswordConfrimInputField = ({
  confirmPassword,
  onChange,
  isInvalid = false,
}: Props) => {
  const [isHide, setIsHide] = useState<boolean>(true);

  const onPress = () => {
    setIsHide(!isHide);
  };

  return (
    <View
      style={[
        styles.container,
        {borderColor: isInvalid ? '#FF0000' : '#E5E5E5'},
      ]}>
      <FontistoIcon name="checkbox-active" size={16} color={'#9D9D9D'} />
      <TextInput
        value={confirmPassword}
        onChangeText={value => {
          if (onChange) onChange(value);
        }}
        style={[styles.input, {color: isInvalid ? '#FF0000' : '#000'}]}
        placeholder="パスワード確認"
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={isHide}
      />
      <TouchableOpacity onPress={onPress}>
        {isHide ? (
          <Icon name="eye" size={18} color={'#9D9D9D'} />
        ) : (
          <Icon name="eye-closed" size={18} color={'#9D9D9D'} />
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
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    height: 34,
    paddingVertical: 8,
    fontWeight: 'medium',
    fontSize: 14,
  },
});

export default PasswordConfrimInputField;
