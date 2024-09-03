import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Footer from '../components/common/Theme/footer';

const { width } = Dimensions.get('window');

const UserScreen = ({ navigation }: any) => {
  const handleEditProfile = () => {
    // Add logic here to navigate to the edit profile screen or handle profile editing
    navigation.navigate('User-Info')
    console.log("Edit Profile button pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>個人情報の編集</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>料金管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>パスワード管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>図面データ管理</Text>
        </TouchableOpacity>
      </View>
      <Footer style={styles.footer} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001a00',
  },
  content: {
    flex: 1, // Takes up all the space above the footer
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#ffffff', // Make sure it has a background color
  },
  button: {
    width: width * 2 / 3,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    marginBottom: 20,
  },
  buttonText: {
    color: '#001a00',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserScreen;
