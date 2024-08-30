import {StyleSheet} from 'react-native';
import LoginSignUpContainer from 'components/common/login-signup/login-signup-container';
import MailInputField from 'components/common/login-signup/mail-input-filed';
import PasswordInputField from 'components/common/login-signup/password-input-field';

type Props = {
  handleInputChange: (field: string, value: string) => void;
  email: string;
  password: string;
};

const MailAndPasswordInput = ({handleInputChange, email, password}: Props) => {
  return (
    <LoginSignUpContainer>
      <MailInputField
        email={email}
        onChange={value => handleInputChange('email', value)}
      />
      <PasswordInputField
        password={password}
        onChange={value => handleInputChange('password', value)}
      />
    </LoginSignUpContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 16,
  },
  input: {},
});

export default MailAndPasswordInput;
