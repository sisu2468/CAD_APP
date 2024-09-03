import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignInScreen from 'screens/login-screen';
import SignUpScreen from 'screens/signup-screen';
import HomeScreen from 'screens/home-screen';
import DesignScreen from 'screens/design-screen';
import PaymentScreen from 'screens/payment-screen';
import UserScreen from 'screens/user-screen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
