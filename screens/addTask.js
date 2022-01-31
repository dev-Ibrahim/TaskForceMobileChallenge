import React, {useState} from 'react';

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
  const [selectedItem, setSelectedItem] = useState();
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Text style={styles.headerText}>New Task</Text>
      <Formik
        initialValues={{title: '', description: '', priority: ''}}
        onSubmit={values => {
          console.log(values);
        }}>
        {props => (
          <View style={{margin: 20}}>
            <Text>Title</Text>
            <TextInput
              placeholder="Task title(140 Characters)"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <Text>Description</Text>
            <TextInput
              multiline
              numberOfLines={5}
              placeholder="240 Characters"
              onChangeText={props.handleChange('description')}
              value={props.values.description}
            />
            <Text>Priority</Text>
            <TouchableOpacity
              style={{backgroundColor: COLORS.blackish, width: '30%'}}
              onPress={props.handleSubmit}>
              <MyAppText text={'Create task'} textColor={'#fff'} />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;
