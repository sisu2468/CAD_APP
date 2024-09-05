import {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Alert, Text, ScrollView} from 'react-native';

import SignupOptionAndInfoSection from 'components/screens/signup-screen/signup-info-section';
import LoginSignupButton from 'components/common/login-signup/login-signup-button';

import PageStyles from 'components/common/login-signup/style.module';

const Logo = require('assets/images/Delite_logo.png');

const SignUpScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateForm(email, companyname, password, confirmPassword);
  }, [email, password, confirmPassword]);

  const handleSSOWithGoogle = () => {
    Alert.alert('Please wait. Implementing the feature');
  };

  const handleSignUpWithEmail = () => {
    if (isValid) navigation.navigate('Home');
  };

  const validateForm = (
    email: string,
    companyname: String,
    password: string,
    confirmPassword: string,
  ) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === confirmPassword
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'companyname':
        setCompanyName(value);
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Image source={Logo} style={styles.logo} />
          <View style={PageStyles.mainArea}>
            <View style={styles.titleAndDescription}>
              <Text style={styles.title}>Create an Account</Text>
            </View>

            <SignupOptionAndInfoSection
              navigation={navigation}
              handleSSOWithGoogle={handleSSOWithGoogle}
              handleInputChange={handleInputChange}
              email={email}
              password={password}
              companyname={companyname}
              confirmPassword={confirmPassword}
            />

            <View style={styles.loginbuttonSctionContainer}>
              <LoginSignupButton
                label="Get Started"
                onClick={handleSignUpWithEmail}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#383F41',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    marginTop: 222,
    paddingVertical: 80,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  logo: {
    width: 219,
    height: 209,
    position: 'absolute',
    top: -153,
    borderRadius: 50,
  },
  titleAndDescription: {
    width: '100%',
    gap: 8,
    alignItems: 'center',
    letterSpacing: -0.2,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    color: '#383535',
  },
  description: {
    fontSize: 14,
    color: '#383F41',
    textAlign: 'center',
  },
  descriptionInlineLinkText: {
    color: '#3399FF',
  },
  loginbuttonSctionContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  createAccountContainer: {
    flexDirection: 'row',
  },
  createAccountText: {
    fontSize: 14,
    color: '#383F41',
  },
  createAccountLink: {
    fontSize: 14,
    color: '#3399FF',
  },
});

export default SignUpScreen;
