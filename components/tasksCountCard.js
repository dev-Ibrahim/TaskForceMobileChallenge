import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../assets/colors';

const styles = StyleSheet.create({
  TaskCountCard: {
    width: 90,
    height: 90,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
});
const TaskCountCard = ({count, name}) => {
  return (
    <View style={styles.TaskCountCard}>
      <Text style={{color: COLORS.green, fontSize: 30, fontWeight: 'bold'}}>
        {count}
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 12}}>{name}</Text>
    </View>
  );
};

export default TaskCountCard;
