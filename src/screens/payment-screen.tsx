import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../components/common/Theme/footer';

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
        <Text style={styles.hometext}>Choose Your Payment Method</Text>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => handlePaymentSelection('Bank Transfer')}>
          <Text style={styles.paymentText}>銀行決済</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => handlePaymentSelection('Stripe')}>
          <Text style={styles.paymentText}>Stripe決済</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => handlePaymentSelection('PayPal')}>
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
    color: '#03f8ff',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
    marginBottom: 25,
    fontWeight: '800',
  },
  paymentOption: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
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
