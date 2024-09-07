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
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

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

  const handlePasswordConfirmChange = (text: string) => {
    handleInputChange('confirmPassword', text);
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
        label={t('signinfo.withgoogle')}
        onClick={handleSSOWithGoogle}
      />
      <Text style={styles.separator}>{t('signinfo.or')}</Text>
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
            {t('signinfo.member')}
            <Text
              style={PageStyles.underlineLink}
              onPress={naviagteToSignInScreen}>
              {t('login')}
            </Text>
          </Text>
        )}
        {isUserDuplicated && (
          <Text style={styles.errorText}>
            {t('signinfo.already')}
            <Text
              style={PageStyles.underlineLink}
              onPress={naviagteToSignInScreen}>
              {t('signinfo.insteadsign')}
            </Text>
          </Text>
        )}
        {isInvalidEmail && (
          <View style={styles.warnningMessageContainer}>
            <Icon name="error-outline" size={20} color={'#FF0000'} />
            <Text style={styles.errorText}>{t('signinfo.invalidemail')}</Text>
          </View>
        )}
        {isPasswordWeak && (
          <View style={styles.warnningMessageContainer}>
            <Icon name="error-outline" size={20} color={'#FF0000'} />
            <Text style={styles.errorText}>
              {t('signinfo.pwdstrong')}
            </Text>
          </View>
        )}
        {isNotPasswordMatching && (
          <View style={styles.warnningMessageContainer}>
            <Icon name="error-outline" size={20} color={'#FF0000'} />
            <Text style={styles.errorText}>{t('signinfo.pwdunmatch')}</Text>
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
