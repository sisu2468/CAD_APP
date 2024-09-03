import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const Logo = require('assets/images/Delite_logo.png');
const manageaccount = require('assets/images/profile.png');
const userinfo = require('assets/images/user_info.png');
const feedback = require('assets/images/feedback.png');
const paid = require('assets/images/paid.png');
const design = require('assets/images/design_services_24dp.png');

export default function Footer(navigation){
    const handleSignOut = () => {
        navigation.navigate('Signin', {isSignout: true});
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.newLoanButton} onPress={handleSignOut}>
              <Image source={design} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.newLoanButton} onPress={handleSignOut}>
              <Image source={paid} style={styles.icon} />
            </TouchableOpacity>
            <Image source={Logo} style={styles.logo} />
            <TouchableOpacity style={styles.newLoanButton}>
              <Image source={feedback} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.newLoanButton}>
              <Image source={userinfo} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',  // You can also use 'space-evenly' for more consistent spacing
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffffff',  // Set background color to white
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    gap: 5,
    height: 65,
    zIndex: 99999,
  },
  logo: {
    height: 75,
    width: 75,
    borderRadius: 50,
    flex: 1, // Add flex to distribute space evenly
    marginTop: -20,
    borderTopColor: '#cccccc',
    borderTopWidth: 1,
  },
  icon: {
    height: 40,
    width: 40,
  },
  newLoanButton: {
    flex: 1, // Add flex to distribute space evenly
    alignItems: 'center', // Center the text inside the button
    justifyContent: 'center', // Center the text inside the button
    paddingVertical: 10, // Adjust padding as needed
  },
  newLoanButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
