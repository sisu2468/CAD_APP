import {
  View,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Logo = require('assets/images/logo.png');

const HomeScreen = ({navigation}: any) => {
  const handleLoanSelection = (loanType: string) => {
    Alert.alert('Select Loan Type');
  };

  const handleSignOut = () => {
    navigation.navigate('Signin', {isSignout: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>logo</Text>
        <TouchableOpacity style={styles.newLoanButton} onPress={handleSignOut}>
          <Text style={styles.newLoanButtonText}>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newLoanButton}>
          <Text style={styles.newLoanButtonText}>New Loan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>さあ、始めよう！</Text>
        <Text style={styles.subtitle}>
          まず最初に、あなたが探しているローンの種類を選択する：
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLoanSelection('Bridge Loan')}>
          <Text style={styles.buttonText}>Bridge Loan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLoanSelection('Rental Loan')}>
          <Text style={styles.buttonText}>Rental Loan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  newLoanButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  newLoanButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000000',
  },
});

export default HomeScreen;
