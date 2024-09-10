import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import languageDetector from 'i18next-react-native-language-detector';

const Stack = createNativeStackNavigator();

import SignInScreen from 'screens/login-screen';
import SignUpScreen from 'screens/signup-screen';
import HomeScreen from 'screens/home-screen';
import DesignScreen from 'screens/design-screen';
import PaymentScreen from 'screens/payment-screen';
import UserScreen from 'screens/user-screen';
import FeedbackScreen from 'screens/feedback-screen';
import UserInfo from 'components/screens/user-screen/user-info'
import UserPayment from 'components/screens/user-screen/user-payment';
import UserPassword from 'components/screens/user-screen/user-pwd';
import UserDesign from 'components/screens/user-screen/user-design';

// Import your translations
import en from './locales/en.json';
import jp from './locales/jp.json';
import { useState } from 'react';

// Detect the user’s device language
const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    fallbackLng: 'en', // Fallback language if device language is not supported
    lng: 'jp', // Set initial language
    resources: {
      en: { translation: en },
      jp: { translation: jp },
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
});

const App = () => {
  return (
    <NavigationContainer>
      <I18nextProvider i18n={i18next}>
        <Stack.Navigator>
          <Stack.Screen
            name="Signin"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Design"
            component={DesignScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Feedback"
            component={FeedbackScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="User-Info"
            component={UserInfo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="User-Pwd"
            component={UserPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="User-Pay"
            component={UserPayment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="User-Design"
            component={UserDesign}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </I18nextProvider>
    </NavigationContainer>
  );
};

export default App;
