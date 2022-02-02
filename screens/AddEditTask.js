import React, {useState, useEffect} from 'react';

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
import {Formik} from 'formik';
import MyAppText from '../components/myAppText';
import {Picker} from '@react-native-picker/picker';
import SQLite from 'react-native-sqlite-storage';
import {getCurrentDate} from '../utilities/util';
import {addNewTask, updateTask} from '../utilities/database';

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
    justifyContent: 'space-evenly',
  },
  fieldLabel: {
    marginTop: 30,
    color: COLORS.blackish,
    fontWeight: 'bold',
    fontSize: 15,
  },
  inputField: {
    backgroundColor: COLORS.milkWhite,
    padding: 3,
    marginTop: 10,
    marginBottom: 10,
  },
});

const AddEditTask = ({route, navigation}) => {
  const editTask = route.params
    ? route.params
    : {title: '', description: '', priority: ''};

  const btnTxt = !editTask.ID ? 'Create Task' : 'Edit Task';
  const [selectedPriority, setSelectedPriority] = useState(editTask.Priority);
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Text style={styles.headerText}>New Task</Text>
      <Formik
        initialValues={{
          title: editTask.Title,
          description: editTask.Description,
          priority: editTask.Priority,
        }}
        onSubmit={task => {
          if (!editTask.ID) {
            addNewTask(task);
          } else {
            updateTask(Object.assign(editTask, task));
          }
        }}>
        {props => (
          <View style={{margin: 20}}>
            <Text style={styles.fieldLabel}>Title</Text>
            <TextInput
              placeholder="Task title(140 Characters)"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              style={styles.inputField}
            />
            <Text style={styles.fieldLabel}>Description</Text>
            <TextInput
              multiline
              numberOfLines={7}
              placeholder="240 Characters"
              onChangeText={props.handleChange('description')}
              value={props.values.description}
              style={styles.inputField}
            />
            <Text style={styles.fieldLabel}>Priority</Text>
            <Picker
              style={styles.inputField}
              selectedValue={selectedPriority}
              onValueChange={(itemValue, itemIndex) => {
                props.setFieldValue('priority', itemValue);
                setSelectedPriority(itemValue);
              }}>
              <Picker.Item label="Select Priority" value="" />
              <Picker.Item label="High" value="high" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Low" value="low" />
            </Picker>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.blackish,
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                padding: 5,
              }}
              onPress={props.handleSubmit}>
              <MyAppText text={btnTxt} textColor={'#fff'} />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddEditTask;
