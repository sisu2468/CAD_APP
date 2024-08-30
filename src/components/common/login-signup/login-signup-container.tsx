import {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';

const LoginSignUpContainer = ({children}: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 16,
  },
});

export default LoginSignUpContainer;
