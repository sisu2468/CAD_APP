import PageStyles from 'components/common/login-signup/style.module';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

type Props = {
  isRemember?: boolean;
  setIsRemember?: (Checked: boolean) => void;
};

const LoginOptions = ({isRemember, setIsRemember}: Props) => {
  const handleIsRemember = () => {
    if (setIsRemember) setIsRemember(!isRemember);
  };

  const handleForgotPassword = () => {
    Alert.alert('', 'Please wait. Implementing the feature.');
  };

  return (
    <View style={styles.optionsRow}>
      <TouchableOpacity
        onPress={handleIsRemember}
        style={styles.checkboxContainer}>
        {isRemember ? (
          <Icon name="checkbox-active" size={16} color={'#383F41'} />
        ) : (
          <Icon name="checkbox-passive" size={16} color={'#383F41'} />
        )}
        <Text style={styles.checkboxLabel}>Remember Me</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={PageStyles.underlineLink} onPress={handleForgotPassword}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#383F41',
  },
});

export default LoginOptions;
