import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or FontAwesome, Ionicons, etc.


type Props = {
  label: string;
  onClick: () => void;
  buttontype: string;
};
const LoginSignupButton = ({label, onClick, buttontype}: Props) => {
  console.log("//", label);
  
  return (
    <TouchableOpacity style={styles.signInButton} onPressOut={onClick}>
      {buttontype === "signin" ? (
        <Icon name="login" size={30} color="#fff" />
      ) : (
        <Icon name="logout" size={30} color="#fff" />
      )}
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
    flexDirection: 'row',
  },
  signInButtonText: {
    padding: 0,
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default LoginSignupButton;
