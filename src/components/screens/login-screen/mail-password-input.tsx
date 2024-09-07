import {useState} from 'react';
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
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);

  const handleEmailChange = (text: string) => {
    handleInputChange('email', text);
    setIsInvalidEmail(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(text)) {
      setIsInvalidEmail(true);
      return;
    }
  };

  const handlePasswordChange = (text: string) => {
    handleInputChange('password', text);
    setIsPasswordWeak(false);

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(text)) {
      setIsPasswordWeak(true);
      return;
    }
  };

  return (
    <LoginSignUpContainer>
      <MailInputField
        email={email}
        onChange={handleEmailChange}
        isInvalid={isInvalidEmail}
      />
      <PasswordInputField
        password={password}
        onChange={handlePasswordChange}
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
