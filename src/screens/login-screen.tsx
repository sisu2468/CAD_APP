import {useState} from 'react';
import { API_URL, API_KEY } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  };

  const HandleSignIn = () => {
    // if (email !== 'test@gmail.com' || password !== 'test123') {

    //   Alert.alert(
    //     '無効な資格情報。',
    //     `現状 \n\n メールアドレス: ${email} \n パスワード: ${password}`,
    //   );
    //   return;
    // } else {
      // try {
      //   console.log("///////");
        
      //   const response = await fetch('http://localhost:8000/api/login', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       email: email,
      //       pwd: password,
      //     }),
      //   });
      
      //   const data = await response.json();
        
      //   if (response.ok) {
      //     // Successful login
      //     Alert.alert('ログイン成功', `ようこそ ${data.name}`);
      //     navigation.navigate('Home');
      //   } else {
      //     // Handle login failure
      //     Alert.alert('ログイン失敗', data.message || '無効な認証情報');
      //   }
      // } catch (error) {
      //   Alert.alert('エラー', '何か問題が発生しました。');
      //   console.error(error);
      // }
     
      navigation.navigate('Home');
      
    // }
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
              <Text style={styles.title}>ログイン</Text>
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
              <LoginSignupButton label="ログイン" onClick={HandleSignIn} />

              <View style={styles.createAccountContainer}>
                <TouchableOpacity>
                  <Text
                    style={PageStyles.underlineLink}
                    onPress={navigateToSignup}>
                    新規登録はこちら
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
