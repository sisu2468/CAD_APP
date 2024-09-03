import React, {useEffect, useState, useRef} from 'react';

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';

import Footer from '../components/common/Theme/footer';

const fvimage1 = require('assets/images/machine_cad_1.jpg');
const fvimage2 = require('assets/images/machine_cad_2.jpg');
const fvimage3 = require('assets/images/machine_cad_3.jpg');
const fvimage4 = require('assets/images/machine_cad_4.jpg');
const fvimage5 = require('assets/images/machine_cad_5.jpg');
const fvimage6 = require('assets/images/machine_cad_6.jpg');

const photoimage1_0 = require('assets/photos/IMG_4347.jpg');
const photoimage1_1 = require('assets/photos/IMG_4348.jpg');
const photoimage1_2 = require('assets/photos/IMG_4349.jpg');
const photoimage2 = require('assets/photos/IMG_4656.jpg');
const photoimage3 = require('assets/photos/IMG_5047.jpg');
const photoimage4 = require('assets/photos/IMG_5143.jpg');
const photoimage5_0 = require('assets/photos/IMG_5545.jpg');
const photoimage5_1 = require('assets/photos/IMG_5546.jpg');
const photoimage5_2 = require('assets/photos/IMG_5547.jpg');

const design1 = require('assets/designs/design1.jpg');
const design2 = require('assets/designs/design2.jpg');
const design3 = require('assets/designs/design3.jpg');
const design4 = require('assets/designs/design4.jpg');
const design5 = require('assets/designs/design5.jpg');

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const UserScreen = ({navigation, route}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
      </ScrollView>
      <Footer style={styles.footer} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001a00',
  },
  scrollContent: {
    flexGrow: 1,

  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
  },
});

export default UserScreen;
