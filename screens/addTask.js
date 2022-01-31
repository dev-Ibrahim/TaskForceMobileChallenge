import React, {useState} from 'react';
import Select, {SelectItem} from '@redmin_delishaj/react-native-select';
const data = [
  {text: 'High', value: 1},
  {text: 'Medium', value: 2},
  {text: 'Low', value: 3},
];
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: COLORS.darkGrey,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20,
  },
  container: {
    margin: 20,
  },
});

const AddTask = () => {
  const [selectedItem, setSelectedItem] = useState(3);
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Text style={styles.headerText}>New Task</Text>
      <View style={{margin: 20}}>
        <Text>Title</Text>
        <TextInput placeholder="Task title(140 Characters)" />
        <Text>Description</Text>
        <TextInput placeholder="240 Characters" />
        <Text>Priority</Text>
        <Select
          data={data}
          onSelect={value => setSelectedItem(value)}
          value={selectedItem}
        />
      </View>
    </View>
  );
};

export default AddTask;
