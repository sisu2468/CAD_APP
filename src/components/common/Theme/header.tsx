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

  const previousButton = require('../../../assets/images/ep_back.png');
  
  return (
    <View style={styles.header}>
      {/* Previous Button */}
      <TouchableOpacity style={styles.previousstyle} onPress={() => navigation.goBack()}>
        <Image source={previousButton} style={styles.previousButton} />
      </TouchableOpacity>

      {/* Title in Center */}
      <View style={styles.titleContainer}>
        <Text style={styles.headertext}>{title}</Text>
      </View>

      {/* Settings Icon */}
      <TouchableOpacity onPress={toggleModal}>
        <Image source={SettingImage} style={styles.icon} />
      </TouchableOpacity>

      {/* Modal for Language Change */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    height: 65,
    zIndex: 99999,
    borderBottomColor: '#292929',
    borderBottomWidth: 0.5,
    marginBottom: 10,
  },
  previousstyle: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns image and text vertically
  },
  previousButton: {
    width: 25,
    height: 25,
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center', // Center the title horizontally
    justifyContent: 'center', // Center the title vertically
  },
  headertext: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '700',
    textAlign: 'center',
  },
  icon: {
    width: 25,
    height: 25,
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
    width: 150,
    marginTop: 50,
  },
  dropdownText: {
    fontSize: 16,
    padding: 10,
  },
});

export default Header;
