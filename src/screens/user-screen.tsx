import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Footer from '../components/common/Theme/footer';

const { width } = Dimensions.get('window');
const previousButton = require('../assets/images/ep_back.png')
const userinfo = require('../assets/images/ph_user-thin.png')
const userpwd = require('../assets/images/circum_unlock.png')
const usercost = require('../assets/images/yen_logo.png')
const userlogout = require('../assets/images/user_logout.png')

const UserScreen = ({ navigation }: any) => {
  const handleEditProfile = () => {
    navigation.navigate('User-Info')
  };
  const handleEditPayment = () => {
    navigation.navigate('User-Pay')
  };
  const handleEditPassword = () => {
    navigation.navigate('User-Pwd')
  };
  const handleEditDesign = () => {
    navigation.navigate('User-Design')
  };
  const handleSignOut = () => {
    navigation.navigate('Signin', {isSignout: true});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.status}>
        <TouchableOpacity style={styles.previousstyle} onPress={() => navigation.goBack()}>
          <Image source={previousButton} style={styles.previousButton} />
          <View style={styles.headertextContainer}>
            <Text style={styles.headertext}>Account details</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Image source={userinfo} style={styles.logoImage}></Image>
          <Text style={styles.buttonText}>Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditPayment}>
          <Image source={usercost} style={styles.logoImage}></Image>
          <Text style={styles.buttonText}>Payment Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditPassword}>
          <Image source={userpwd} style={styles.logoImage}></Image>
          <Text style={styles.buttonText}>Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditDesign}>
          <Text style={styles.buttonText}>Design Management</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Image source={userlogout} style={styles.logoImage}></Image>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <Footer style={styles.footer} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1, // Takes up all the space above the footer
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 10, // Padding inside the border
  },
  status: {
    marginTop: 20,
    paddingLeft: 20,
    borderBottomColor: '#292929',
    borderBottomWidth: 0.5,
  },
  previousstyle: {
    flexDirection: 'row', // Aligns the image and text horizontally
    alignItems: 'center', // Centers the image and text vertically
    justifyContent: 'center', // Centers content horizontally
  },
  headertextContainer: {
    flex: 1, // Takes up remaining space after the image
    justifyContent: 'center', // Centers text vertically within this container
  },
  headertext: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    fontWeight: '700',
    paddingBottom: 10,
  },
  previousButton: {
    width: 25,
    height: 25,
    marginBottom: 10,
  },
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#ffffff', // Make sure it has a background color
  },
  button: {
    flexDirection: 'row',
    width: width * 2 / 3,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000', // Use borderColor instead of borderBlockColor
    alignItems: 'center', // Center items vertically
    paddingHorizontal: 10, // Add horizontal padding for spacing
    marginBottom: 20,
    padding: 10,
  },
  logoImage: {
    width: 25, // Adjust as needed
    height: 25, // Adjust as needed
    // marginRight: 10, // Space between image and text
  },
  buttonText: {
    color: '#001a00',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center text within its container
    flex: 1, // Allow text to take up remaining space
  },
});

export default UserScreen;
