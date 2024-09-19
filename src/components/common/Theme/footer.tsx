import { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';  // Use FontAwesome or other icon set
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'; // Or any other library


import { UserContext } from 'components/common/userContext';

const Logo = require('assets/images/Delite_logo.png');
const manageaccount = require('assets/images/profile.png');
const userinfo = require('assets/images/user_info.png');
const feedback = require('assets/images/feedback.png');
const paid = require('assets/images/paid.png');
const design = require('assets/images/design_services_24dp.png');

const Footer = ({navigation, route}: any) => {
  const [isAdmin, setIsAdmin] = useState('true');
  const { userData } = useContext(UserContext);

  const handleSignOut = () => {
    navigation.navigate('Signin', {isSignout: true});
  };
  const handleDesign = () => {
    navigation.navigate('Design');
  };
  const handlePaid = () => {
      navigation.navigate('Payment');
  };
  const handleHome = () => {
      navigation.navigate('Home');
  };
  const handleFeedback = () => {
    navigation.navigate('Feedback')
  };
  const handleUser = () => {
    navigation.navigate('User')
  };
  const handleAdmin = () => {
    navigation.navigate('Admin')
  };
  console.log("userdata", userData.isAdmin);
  
  return (
    <View style={styles.footer}>
        <TouchableOpacity style={styles.newLoanButton} onPress={handleDesign}>
          {/* <Image source={design} style={styles.icon} /> */}
          <Icon2 name="compass" size={35} color="#404040" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newLoanButton} onPress={handlePaid}>
          {/* <Image source={paid} style={styles.icon} /> */}
          <Icon name="paid" size={35} color="#404040" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleHome}>
          <Image source={Logo} style={styles.logo}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newLoanButton} onPress={handleFeedback}>
          <Icon2 name="square-edit-outline" size={35} color="#404040" />
        </TouchableOpacity>
        {userData.isAdmi ? (
          <TouchableOpacity style={styles.newLoanButton} onPress={handleAdmin}>
            <Icon2 name="account-cog" size={35} color="#404040" />
          </TouchableOpacity>
        ): (
          <TouchableOpacity style={styles.newLoanButton} onPress={handleUser}>
            <Icon2 name="account" size={35} color="#404040" />
          </TouchableOpacity>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',  // You can also use 'space-evenly' for more consistent spacing
    alignItems: 'center',
    paddingHorizontal: 20,
    // paddingTop: 10,
    // paddingBottom: 10,
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

export default Footer;