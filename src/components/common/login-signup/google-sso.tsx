import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const GoogleIcon = require('assets/images/google.png');

type Props = {
  label: string;
  onClick?: () => void;
};

const SSOWithGoogle = ({label, onClick}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPressOut={onClick}>
      <Image source={GoogleIcon} style={styles.googleIcon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 36,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  googleIcon: {
    width: 17,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    padding: 0,
    fontSize: 14,
    fontWeight: 'medium',
    color: '#5A5A5A',
  },
});

export default SSOWithGoogle;
