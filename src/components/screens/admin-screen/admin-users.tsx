import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MailInputField from 'components/common/login-signup/mail-input-filed';
import CompanyInputField from 'components/common/login-signup/companyname-input-filed';
import BirthdateInputField from 'components/common/login-signup/birthdate-input-filed';
import PasswordInputField from 'components/common/login-signup/password-input-field';
import FullNameInputField from 'components/common/login-signup/full-name-input-filed';
import PasswordConfrimInputField from 'components/common/login-signup/password-confirm-input-field';
import PhoneNumberInputField from 'components/common/login-signup/phone-number-input-field';

import Footer from 'components/common/Theme/footer';
import Header from 'components/common/Theme/header';
import { useTranslation } from 'react-i18next';
import SignupOptionAndInfoSection from 'components/screens/signup-screen/signup-info-section';

import { UserContext } from 'components/common/userContext';

const AdminUsers = ({navigation}: any) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [usermodalVisible, setUserModalVisible] = useState(false);
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackContent, setFeedbackContent] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState<boolean>(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);
  const [isNotPasswordMatching, setIsNotPasswordMatching] =
    useState<boolean>(false);
  const [usersdata, setUsersData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  // Sample data for the table
  const data = [
    { no: 1, name: 'User1', mail: 'user@gmail.com', companyname: "AAA" },
    { no: 2, name: 'User2', mail: 'user@gmail.com', companyname: "AAA" },
    { no: 3, name: 'User3', mail: 'user@gmail.com', companyname: "AAA" },
    // Add more rows as needed
  ];

  const [username, setUserName] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [birthdate, setBirthDate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const { userData } = useContext(UserContext);

  const handleSignUpWithEmail = async() => {
    if (isValid){
      try {
        const response = await fetch('http://62.3.6.169:8000/api/register', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            companyname: companyname,
            birthdate: birthdate,
            email: email,
            pwd: password
          }),
        });
    
        const data = await response.json();
        console.log("data", data);
    
        if (response.ok) {
          // Successful register
          Alert.alert(`${t('registerscreen.registersuccess')}`, `${t('welcome')}`);
          navigation.navigate('Signin');
        } else {
          // Handle login failure
          Alert.alert(`${t('registerscreen.registerfailed')}`, data.message ? t(`registerscreen.${data.message}`) : t('loginscreen.invalidcredential'));
        }
      } catch (error) {
        Alert.alert(t('error'), t('loginscreen.errmsg'));
        console.error(t('neterror'), error);
      }
    }
  };

  const validateForm = (
    email: string,
    companyname: String,
    password: string,
    confirmPassword: string,
  ) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === confirmPassword
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'username':
        setUserName(value);
        break;
      case 'companyname':
        setCompanyName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
    }
    console.log("......", username, companyname, birthdate, email, password);
  };
  const handleDateChange = (value: Date) => {
    setBirthDate(value);
  }

  const get_All_Users = async() => {
    try {
      const response = await fetch('http://62.3.6.169:8000/api/users', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      console.log("response", data);
      setUsersData(data);
      
    } catch (err) {

    }
  };

  useEffect(() => {
    get_All_Users();
  }, [])

  // Function to handle form submission
  const handleAddUser = () => {
    // Implement your form submission logic here
    console.log('Add User');
    // Close the modal after submission
    setUserModalVisible(false);
  };
  const handleDeleteUser = () => {
    // Implement your form submission logic here
    console.log('Add User');
    // Close the modal after submission
    setUserModalVisible(false);
  };

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

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('admin.userinfo')} navigation={navigation} />
      <View style={styles.feedbackheader}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Icon name="search" size={20} color="#000"/>
          </TouchableOpacity>
          <TextInput
            style={styles.searchinput}
            placeholder={t('search')}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            clearButtonMode="always"
          />
        </View>
        <TouchableOpacity
          style={styles.plusIcon}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="add" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>{t("admin.users.no")}</Text>
            <Text style={styles.headerText}>{t("admin.users.name")}</Text>
            <Text style={styles.headerText}>{t("admin.users.mail")}</Text>
            <Text style={styles.headerText}>{t("admin.users.company")}</Text>
          </View>

          {/* Table Rows */}
          {usersdata.map((user, index) => (
              <TouchableOpacity
                  key={index} // Key should be on the outermost element
                  onPress={() => {
                      setUserModalVisible(true);
                      setSelectedUser(user); // Assuming you have setSelectedUser to pass user data to the modal
                  }}
              >
                {user.isAdmin 
                  ?(<></>) : (
                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>{user.avatar}</Text>
                        <Text style={styles.cell}>{user.name}</Text>
                        <Text style={styles.cell}>{user.email}</Text>
                        <Text style={styles.cell}>{user.companyname}</Text>
                    </View>
                  )
                }

              </TouchableOpacity>
          ))}

        </View>
      </ScrollView>
      {/* Feedback Submission Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('admin.users.adduser')}</Text>
            {/* <SignupOptionAndInfoSection
              navigation={navigation}
              username={username}
              companyname={companyname}
              birthdate={birthdate}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              handleInputChange={handleInputChange}
              handleDateChange={handleDateChange}
            /> */}
            {/* <FullNameInputField />
            <MailInputField
                email={email}
                onChange={handleEmailChange}
                isInvalid={isInvalidEmail}
            />
            
            <CompanyInputField />
            <BirthdateInputField />
            <PhoneNumberInputField />
            <PasswordInputField
                password={password}
                onChange={handlePasswordChange}
                isInvalid={isPasswordWeak}
            />
            <PasswordConfrimInputField
                confirmPassword={confirmPassword}
                onChange={handlePasswordConfirmChange}
                isInvalid={isNotPasswordMatching}
            /> */}
            {/* {user.isAdmin 
              ?( */}
                <View style={styles.button}>
                  <Button title={t('admin.users.add')} onPress={handleAddUser} />
                  <Button title={t('admin.users.cancel')} onPress={() => setModalVisible(false)} />
                </View>
              {/* ) : (
                <></>
              )
            } */}
            
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={usermodalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('admin.users.adduser')}</Text>
            <FullNameInputField username={'User1'}/>
            <MailInputField
                email={'user@gmail.com'}
                onChange={handleEmailChange}
                isInvalid={isInvalidEmail}
            />
            
            <CompanyInputField companyname={'AAA'} />
            <BirthdateInputField />
            <PhoneNumberInputField phoneNumber={'111111'} />
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
            <View style={styles.button}>
              <Button title={t('admin.users.update')} onPress={handleAddUser} />
              <TouchableOpacity style={styles.deletebutton} onPress={handleDeleteUser}>
                <Text style={styles.buttonText}>{t('admin.users.delete')}</Text>
              </TouchableOpacity>
              <Button title={t('admin.users.cancel')} onPress={() => setUserModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
      <Footer style={styles.footer} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  feedbackheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure both elements are spaced out
    width: '100%',
    paddingHorizontal: 10, // Add some padding for alignment
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  searchinput: {
    marginLeft: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 160,
  },
  button: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  plusIcon: {
    marginLeft: 'auto', // Push the plus icon to the right
    padding: 10,
    borderColor: '#cccccc',
    backgroundColor: '#f1f1f1',
    borderWidth: 0.5,
    borderRadius: 10,
    width: 50,  // Set width and height for circular shape
    height: 50,
    justifyContent: 'center',
    alignItems: 'center', // Centers the add icon inside
  },
  icon: {
    tintColor: '#000',
  },  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalinput: {
    marginLeft: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  multiLineInput: {
    height: 200,
    textAlignVertical: 'top',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  deletebutton: {
    backgroundColor: "red",
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    color: "#000000",
    fontWeight: '500'
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: '#000',
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: '#000',
    fontSize: 16,
    backgroundColor: '#fff',
  }
});

export default AdminUsers;
