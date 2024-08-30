import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  label: string;
  onClick: () => void;
};
const LoginSignupButton = ({label, onClick}: Props) => {
  return (
    <TouchableOpacity style={styles.signInButton} onPressOut={onClick}>
      <Text style={styles.signInButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#66CC33',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    padding: 0,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginSignupButton;
