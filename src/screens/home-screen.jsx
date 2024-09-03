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

const HomeScreen = ({ navigation }) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  let transheight = height * 1 / 3;
  const translateX = useRef(new Animated.Value(0)).current; // Initialize translateX for sliding
  const scale = useRef(new Animated.Value(1)).current;  // For zoom out (initial value > 1)

  // State to manage current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of images
  const images = [fvimage1, fvimage3, fvimage4, fvimage5, fvimage6];

  const startAnimations = () => {
    // Reset scale, fade, and translateX animation values before starting a new sequence
    scale.setValue(1);
    fadeAnim.setValue(0);
    translateX.setValue(0); // Reset translateX to start position
  
    // Apply fade and scale animations in parallel
    Animated.sequence([
      Animated.parallel([
        // Zoom in the image
        Animated.timing(scale, {
          toValue: 1.4,
          duration: 4000,
          useNativeDriver: true,
        }),
        // Fade out the current image
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
  
      // Slide the image to the left after fade and scale have completed
      Animated.timing(translateX, {
        toValue: -width, // Slide the image off-screen to the left
        duration: 1000, // Adjust the duration of the slide
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Update image index and loop
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  
      // Reset translateX value for the next image (off-screen to the right)
      translateX.setValue(width); // Start off-screen to the right for next image
  
      // Slide in the new image
      Animated.timing(translateX, {
        toValue: 0, // Slide in from the right to the center
        duration: 1000, // Duration of sliding in animation
        useNativeDriver: true,
      }).start();
    });
  };
 

  // Start animations when the component mounts or when the image index changes
  useEffect(() => {
    startAnimations();
  }, [currentImageIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.fadingContainer}>
          <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
              transform: [
                { scale },
                { translateX }, // Page turn effect
              ],
            },
            ]}
          >
            <Image source={images[currentImageIndex]} style={styles.fvimges} />
          </Animated.View>
        </View>
        <View style={styles.content}>
          <Text style={styles.hometext}>Recently Processed Drawings</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={design1} style={styles.designimage} />
            <Image source={design2} style={styles.designimage} />
            <Image source={design3} style={styles.designimage} />
            <Image source={design4} style={styles.designimage} />
            <Image source={design5} style={styles.designimage} />
          </ScrollView>
        </View>
        <View style={styles.photocontent}>
          <Text style={styles.hometext}>Recently Captured Photos</Text>
          <View horizontal style={styles.photoimages}>
            <Image source={photoimage1_0} style={styles.photoimage} />
            <Image source={photoimage1_1} style={styles.photoimage} />
            <Image source={photoimage1_2} style={styles.photoimage} />
          </View>
          <View horizontal style={styles.photoimages}>
            <Image source={photoimage5_0} style={styles.photoimage} />
            <Image source={photoimage5_1} style={styles.photoimage} />
            <Image source={photoimage5_2} style={styles.photoimage} />
          </View>
        </View>
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
  photocontent: {
    marginTop: 20,
  },
  fadingContainer: {
    marginBottom: 30,
    height: 250,
    overflow: 'hidden',
  },
  hometext: {
    color: '#03f8ff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: '800',
  },
  fvimges: {
    width: Dimensions.get('window').width * 0.8, // Adjust width for horizontal scroll
    height: 250,
    margin: 'auto',
  },
  images: {
    width: Dimensions.get('window').width * 1, // Adjust width for horizontal scroll
    height: 250,
    // width: '100%',
  },
  photoimages: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures even spacing between images
    paddingBottom: 5,
  },
  photoimage: {
    flex: 1, // Each image will take 1 unit of space
    // aspectRatio: 1, // Maintain square aspect ratio (adjust if necessary)
    borderBlockColor: '#ffffff',
    borderWidth: 5,
    marginHorizontal: 5, // Add some horizontal margin between images
    height: 250,
  },
  designimage: {
    width: Dimensions.get('window').width * 0.9, // Adjust width for horizontal scroll
    height: 250,
    // width: '100%',
    marginRight: 10, // Add space between images
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
  },
});

export default HomeScreen;
