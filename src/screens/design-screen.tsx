import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';

import Footer from '../components/common/Theme/footer';
import Header from '../components/common/Theme/header';

const DesignScreen = ({navigation, route}: any) => {
  const [imageUri, setImageUri] = useState(null);

  // Function to handle image selection
  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',  // You can also specify 'video'
      includeBase64: false,
      maxHeight: 500,
      maxWidth: 500,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setImageUri(source);
      }
    });
  };
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('design.design')}  navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.importImage}>
          <Text style={styles.hometext}>{t('design.select')}</Text>

          <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
            <Text style={styles.buttonText}>{t('design.upload')}</Text>
          </TouchableOpacity>

          {imageUri && (
            <View style={styles.imageContainer}>
              <Image source={imageUri} style={styles.imagePreview} />
            </View>
          )}
        </View>
        <View style={styles.exportdesign}>
          <Text style={styles.hometext}>{t('design.create')}</Text>
        </View>
      </ScrollView>
      <Footer style={styles.footer} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  importImage: {
    display: 'flex',
    width: '100%',
    height: 500,
    borderColor: '#000000',
    borderWidth: 2,
    marginBottom: 30,
    marginTop: 20,
    alignItems: 'center', // Centers content horizontally
  },
  exportdesign: {
    width: '100%',
    height: 500,
    borderColor: '#000000',
    borderWidth: 2,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  hometext: {
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 25,
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#03f8ff',
    padding: 15,
    borderRadius: 5,
    marginTop: 150,
    marginBottom: 20,
    alignSelf: 'center', // Center only the button horizontally
  },
  buttonText: {
    color: '#001a00',
    fontSize: 17,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center', // Centers image horizontally
    justifyContent: 'center', // Centers image vertically
    width: '100%',
    height: 300,
  },
  imagePreview: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
  },
});

export default DesignScreen;
