import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import { useTranslation } from 'react-i18next';

const SettingImage = require('assets/images/settings.png');

const Header = ({ title, navigation, route }: any) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const previousButton = require('../../../assets/images/ep_back.png')
  
  return (
    <View style={styles.header}>
        <View style={styles.status}>
        <TouchableOpacity style={styles.previousstyle} onPress={() => navigation.goBack()}>
          <Image source={previousButton} style={styles.previousButton} />
          <View style={styles.headertextContainer}>
            <Text style={styles.headertext}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={toggleModal}>
        <Image source={SettingImage} style={styles.icon} />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)} // Close modal when clicking outside of it
        style={styles.modal}>
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => changeLanguage('en')}>
            <Text style={styles.dropdownText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('jp')}>
            <Text style={styles.dropdownText}>日本語</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    height: 65,
    zIndex: 99999,
  },
  status: {
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
  },
  icon: {
    width: 25,  // Increased size for better visibility
    height: 25,
    right: 5,
  },
  modal: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    margin: 0, // Remove default margin
  },
  dropdown: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderWidth: 1,
    width: 150, // Adjust the width as needed
    marginTop: 50,
  },
  dropdownText: {
    fontSize: 16,
    padding: 10,
  },
});

export default Header;
