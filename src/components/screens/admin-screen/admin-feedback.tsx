import React, { useState } from 'react';
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
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { SelectList } from 'react-native-dropdown-select-list'

import Footer from '../../../components/common/Theme/footer';
import Header from '../../../components/common/Theme/header';
import { useTranslation } from 'react-i18next';

const AdminFeedback = ({navigation, route}: any) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [feedbackTitle, setFeedbackTitle] = useState('Feedback1');
  const [feedbackContent, setFeedbackContent] = useState('ホーム画面のスタイル改善');
  const [feedbackcategory, setFeedbackCategory] = useState('Bug');
  const [feedbackStatus, setFeedbackStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [username, setUserName] = useState('user1');
  const [selected, setSelected] = React.useState('Open');

  const statusdata = [
      {key:'1', value:'Open'},
      {key:'2', value:'In Progress'},
      {key:'3', value:'Completed'}
  ]

  // Sample data for the table
  const data = [
    { no: 1, title: 'Feedback 1', user: 'user1', category: 'Bug', status: 'Open' },
    { no: 2, title: 'Feedback 2', user: 'user2', category: 'Feature Request', status: 'Closed' },
    { no: 3, title: 'Feedback 3', user: 'user3', category: 'Bug', status: 'In Progress' },
    // Add more rows as needed
  ];

  const categories = [
    { label: 'Bug Report', value: 'bug_report' },
    { label: 'Feature Request', value: 'feature_request' },
    { label: 'General Feedback', value: 'general_feedback' },
    // Add more categories here
  ];

  // Function to handle form submission
  const handleupdateUser = () => {
    // Implement your form submission logic here
    console.log('Update');
    // Close the modal after submission
    setModalVisible(false);
  };
  const handleDeleteUser = () => {
    // Implement your form submission logic here
    console.log('Delete');
    // Close the modal after submission
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('feedback.feedback')} navigation={navigation} />
      <View style={styles.feedbackheader}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Icon name="search" size={20} color="#000"/>
          </TouchableOpacity>
          <TextInput
            style={styles.searchinput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            clearButtonMode="always"
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>{t("feedback.no")}</Text>
            <Text style={styles.headerText}>{t("feedback.username")}</Text>
            <Text style={styles.headerText}>{t("feedback.title")}</Text>
            <Text style={styles.headerText}>{t("feedback.category")}</Text>
            <Text style={styles.headerText}>{t("feedback.status")}</Text>
          </View>

          {/* Table Rows */}
          {data.map((item, index) => (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View key={index} style={styles.tableRow}>
                <Text style={styles.cell}>{item.no}</Text>
                <Text style={styles.cell}>{item.user}</Text>
                <Text style={styles.cell}>{item.title}</Text>
                <Text style={styles.cell}>{item.category}</Text>
                <Text style={styles.cell}>{item.status}</Text>
                </View>
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
            <Text style={styles.modalTitle}>{t('feedback.submitFeedback')}</Text>
            
            <TextInput
              style={styles.modalinput}
              placeholder={t('feedback.title')}
              value={feedbackTitle}
              onChangeText={setFeedbackTitle}
            />
            <TextInput
              style={styles.modalinput}
              placeholder={t('feedback.username')}
              value={username}
              onChangeText={setUserName}
            />
            <TextInput
              style={styles.modalinput}
              placeholder={t('feedback.category')}
              value={feedbackcategory}
              onChangeText={setFeedbackCategory}
            />
            <TextInput
              style={[styles.modalinput, styles.multiLineInput]}
              placeholder={t('feedback.content')}
              value={feedbackContent}
              onChangeText={setFeedbackContent}
            />
            <SelectList 
                setSelected={(val) => setFeedbackStatus(val)} 
                data={statusdata} 
                save="value"
                defaultOption={{key: '1', value: 'Open'}}
                boxStyles={styles.status}
                dropdownStyles={styles.dropdown}
                placeholder={t('feedback.status')} // Placeholder for status
            />
            <View style={styles.button}>
              <Button title={t('admin.users.update')} onPress={handleupdateUser} />
              <TouchableOpacity style={styles.deletebutton} onPress={handleDeleteUser}>
                <Text style={styles.buttonText}>{t('admin.users.delete')}</Text>
              </TouchableOpacity>
              <Button title={t('admin.users.cancel')} onPress={() => setModalVisible(false)} />
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
    marginTop: 20,
    gap: 20
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
  status: {
    marginBottom: 10, // Style for dropdown
    marginLeft: 10
  },
  dropdown: {
    marginLeft: 10
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
    fontSize: 18,
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

export default AdminFeedback;
