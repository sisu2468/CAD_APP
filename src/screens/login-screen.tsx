import {useState} from 'react';
import { API_URL, API_KEY } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

import {
  View,
  Image,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MailAndPasswordInput from 'components/screens/login-screen/mail-password-input';
import LoginOptions from 'components/screens/login-screen/login-options';
import LoginSignupButton from 'components/common/login-signup/login-signup-button';
import PageStyles from 'components/common/login-signup/style.module';

const Logo = require('assets/images/Delite_logo.png');

const SignInScreen = ({navigation, route}: any) => {
  const { t, i18n } = useTranslation();

  const isSignout = route?.params?.isSignout || false;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
    console.log("......", value);
  };

  const HandleSignIn = async () => {
    try {
      const response = await fetch('http://62.3.6.169:8000/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          pwd: password,
        }),
      });
  
      const data = await response.json();
      console.log("data", data);
  
      if (response.ok) {
        // Successful login
        Alert.alert(`${t('loginscreen.loginsuccess')}`, `${t('welcome')} ${data.user.name}`);
        navigation.navigate('Home');
      } else {
        // Handle login failure
        Alert.alert(`${t('loginscreen.loginfailed')}`, data.message ? t(`loginscreen.${data.message}`) : t('loginscreen.invalidcredential'));
      }
    } catch (error) {
      Alert.alert(t('error'), t('loginscreen.errmsg'));
      console.error(t('neterror'), error);
    }
  };
  

  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.overlay}>
          <Image source={Logo} style={styles.logo} />
          <View style={PageStyles.mainArea}>
            <View style={styles.titleAndDescription}>
              <Text style={styles.title}>{t('login')}</Text>
            </View>

            <MailAndPasswordInput
              handleInputChange={handleInputChange}
              email={email}
              password={password}
            />

            <LoginOptions
              isRemember={isRememberMe}
              setIsRemember={setIsRememberMe}
            />

            <View style={styles.loginbuttonSctionContainer}>
              <LoginSignupButton label={t('login')} onClick={HandleSignIn} buttontype={'signin'} />

              <View style={styles.createAccountContainer}>
                <TouchableOpacity>
                  <Text
                    style={PageStyles.underlineLink}
                    onPress={navigateToSignup}>
                    {t('signup')}
                  </Text>
                </TouchableOpacity>
              </View>
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
    minHeight: '100%',
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
    fontSize: 32,
    // fontFamily: 'Inter',
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

export default SignInScreen;
