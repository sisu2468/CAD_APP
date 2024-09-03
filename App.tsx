import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignInScreen from 'screens/login-screen';
import SignUpScreen from 'screens/signup-screen';
import HomeScreen from 'screens/home-screen';
import DesignScreen from 'screens/design-screen';
import PaymentScreen from 'screens/payment-screen';
import UserScreen from 'screens/user-screen';
import UserInfo from 'components/screens/user-screen/user-info'
import UserPayment from 'components/screens/user-screen/user-payment';
import UserPassword from 'components/screens/user-screen/user-pwd';
import UserDesign from 'components/screens/user-screen/user-design';

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
