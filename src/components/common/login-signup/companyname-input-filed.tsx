import { TextInput, StyleSheet, View } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';  // Use FontAwesome or other icon set
import Icon from 'react-native-vector-icons/MaterialIcons';  // Use MaterialIcons

const CompanyNameInputField = () => {
  return (
    <View style={styles.container}>
      <Icon name="business" size={18} color={'#9D9D9D'} />
      <TextInput
        style={styles.input}
        placeholder="会社名"
        autoCapitalize="words"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  input: {
    flex: 1,
    height: 34,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    fontWeight: 'medium',
    fontSize: 14,
  },
});

export default CompanyNameInputField;
