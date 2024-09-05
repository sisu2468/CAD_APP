import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Footer from '../components/common/Theme/footer';

const { width } = Dimensions.get('window');
const paypallogo = require('../assets/images/paypal.png')
const stripelogo = require('../assets/images/Stripe.png')
const banklogo = require('../assets/images/Japan-Bank3.png')


const PaymentScreen = ({ navigation }: any) => {
  // State for selected payment method
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handlePaymentSelection = (method: string) => {
    setSelectedPaymentMethod(method);
    // Logic to handle payment processing can be added here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.hometext}>お支払い方法を選択してください</Text>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => handlePaymentSelection('Bank Transfer')}>
          <Image source={banklogo} style={styles.logoImage}></Image>
          <Text style={styles.paymentText}>銀行決済</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => handlePaymentSelection('Stripe')}>
          <Image source={stripelogo} style={styles.logoImage}></Image>
          <Text style={styles.paymentText}>Stripe決済</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => handlePaymentSelection('PayPal')}>
          <Image source={paypallogo} style={styles.logoImage}></Image>
          <Text style={styles.paymentText}>PayPal決済</Text>
        </TouchableOpacity>

        {selectedPaymentMethod && (
          <View style={styles.confirmation}>
            <Text style={styles.confirmationText}>
              You selected: {selectedPaymentMethod}
            </Text>
            {/* Payment details or form specific to the selected method could go here */}
          </View>
        )}
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  hometext: {
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 40,
    fontWeight: '800',
  },
  paymentOption: {
    flexDirection: 'row',
    width: width * 2 / 3,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000', // Use borderColor instead of borderBlockColor
    alignItems: 'center', // Center items vertically
    justifyContent: 'center',
    paddingHorizontal: 10, // Add horizontal padding for spacing
    marginBottom: 20,
    padding: 10,
  },
  logoImage: {
    width: 25, // Adjust as needed
    height: 25, // Adjust as needed
    borderRadius: 50,
    // marginRight: 10, // Space between image and text
  },
  paymentText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  confirmation: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#004d00',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  confirmationText: {
    color: '#03f8ff',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
  },
});

export default PaymentScreen;
