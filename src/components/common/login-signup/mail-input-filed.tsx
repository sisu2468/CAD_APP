import {TextInput, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

type Props = {
  email?: string;
  onChange?: (value: string) => void;
  isInvalid?: boolean;
};

const MailInputField = ({email, onChange, isInvalid = false}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {borderColor: isInvalid ? '#FF0000' : '#E5E5E5'},
      ]}>
      <Icon name="mail" size={18} color={'#9D9D9D'} />
      <TextInput
        value={email}
        onChangeText={value => {
          if (onChange) onChange(value);
        }}
        style={[styles.input, {color: isInvalid ? '#FF0000' : '#000'}]}
        placeholder="Email Address"
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

export default MailInputField;
