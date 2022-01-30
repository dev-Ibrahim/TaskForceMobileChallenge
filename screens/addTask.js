import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
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
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Text style={styles.headerText}>New Task</Text>
      <View style={{margin: 20}}></View>
    </View>
  );
};

export default AddTask;
