import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoginSignUpContainer from 'components/common/login-signup/login-signup-container';
import MailInputField from 'components/common/login-signup/mail-input-filed';
import CompanyInputField from 'components/common/login-signup/companyname-input-filed';
import BirthdateInputField from 'components/common/login-signup/birthdate-input-filed';
import PasswordInputField from 'components/common/login-signup/password-input-field';
import SSOWithGoogle from 'components/common/login-signup/google-sso';
import FullNameInputField from 'components/common/login-signup/full-name-input-filed';
import PasswordConfrimInputField from 'components/common/login-signup/password-confirm-input-field';
import PageStyles from 'components/common/login-signup/style.module';

import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  navigation?: any;
  handleSSOWithGoogle?: () => void;
  handleInputChange: (field: string, value: string) => void;
  email: string;
  companyname: string;
  password: string;
  confirmPassword: string;
};

const SignupOptionAndInfoSection = ({
  navigation,
  handleSSOWithGoogle,
  handleInputChange,
  email,
  companyname,
  password,
  confirmPassword,
}: Props) => {
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
  const [isInvalidcompanyname, setIsInvalidCCompanyName] = useState<boolean>(false);
  const [isUserDuplicated, setIsUserDuplicated] = useState<boolean>(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);
  const [isNotPasswordMatching, setIsNotPasswordMatching] =
    useState<boolean>(false);

  const handleEmailChange = (text: string) => {
    handleInputChange('電子メール', text);
    setIsInvalidEmail(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(text)) {
      setIsInvalidEmail(true);
      return;
    }
  };

  const handlePasswordChange = (text: string) => {
    handleInputChange('パスワード', text);
    setIsPasswordWeak(false);

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(text)) {
      setIsPasswordWeak(true);
      return;
    }
  };

  const handlePasswordConfirmChange = (text: string) => {
    handleInputChange('パスワード確認', text);
    setIsNotPasswordMatching(false);

    if (password !== text) {
      setIsNotPasswordMatching(true);
      return;
    }
  };

  const naviagteToSignInScreen = () => {
    navigation.navigate('Signin');
  };

  return (
    <LoginSignUpContainer>
      <SSOWithGoogle
        label="Googleに登録する"
        onClick={handleSSOWithGoogle}
      />
      <Text style={styles.separator}>- OR -</Text>
      <FullNameInputField />
      <CompanyInputField />
      <BirthdateInputField />
      <MailInputField
        email={email}
        onChange={handleEmailChange}
        isInvalid={isInvalidEmail}
      />
      <PasswordInputField
        password={password}
        onChange={handlePasswordChange}
        isInvalid={isPasswordWeak}
      />
      <PasswordConfrimInputField
        confirmPassword={confirmPassword}
        onChange={handlePasswordConfirmChange}
        isInvalid={isNotPasswordMatching}
      />

      <View style={styles.messageContainer}>
        {!(
          isInvalidEmail ||
          isUserDuplicated ||
          isPasswordWeak ||
          isNotPasswordMatching
        ) && (
          <Text style={styles.normalText}>
            すでにアカウントをお持ちですか?{' '}
            <Text
              style={PageStyles.underlineLink}
              onPress={naviagteToSignInScreen}>
              ログイン
            </Text>
          </Text>
        )}
        {isUserDuplicated && (
          <Text style={styles.errorText}>
            このメールアドレスはすでに使用されています。{' '}
            <Text
              style={PageStyles.underlineLink}
              onPress={naviagteToSignInScreen}>
              代わりにサインインしますか?
            </Text>
          </Text>
        )}
        {isInvalidEmail && (
          <View style={styles.warnningMessageContainer}>
            <Icon name="error-outline" size={18} color={'#FF0000'} />
            <Text style={styles.errorText}>電子メールの種類が無効です。</Text>
          </View>
        )}
        {isPasswordWeak && (
          <View style={styles.warnningMessageContainer}>
            <Icon name="error-outline" size={18} color={'#FF0000'} />
            <Text style={styles.errorText}>
              より強力なパスワードを選択してください。文字、数字、記号を組み合わせてみてください。
            </Text>
          </View>
        )}
        {isNotPasswordMatching && (
          <View style={styles.warnningMessageContainer}>
            <Icon name="error-outline" size={18} color={'#FF0000'} />
            <Text style={styles.errorText}>パスワードが一致しません。</Text>
          </View>
        )}
      </View>
    </LoginSignUpContainer>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22.4,
  },
  messageContainer: {
    width: '100%',
    gap: 8,
    fontSize: 14,
  },
  normalText: {
    color: '#000',
  },
  errorText: {
    flexShrink: 1,
    color: '#FF0000',
  },
  warnningMessageContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default SignupOptionAndInfoSection;
