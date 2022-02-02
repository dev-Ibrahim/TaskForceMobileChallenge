import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PriorityStatus from './priorityStatus';

const TaskListCard = ({item}) => {
  const OPACITY = !item.isActive ? 0.7 : 1;
  return (
    <View style={[styles.container, {opacity: OPACITY}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <View style={styles.checkbox}>
          <Icon name="done" color={COLORS.darkGrey} size={15} />
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.taskTitle}>{item.Title}</Text>
          <PriorityStatus priority={item.Priority} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 12, marginRight: 10}}>
              Created {item.DateCreated}
            </Text>
            <Text style={{fontSize: 12}}>Modified {item.DateModified}</Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            marginLeft: 20,
          }}>
          <Icon name="more-vert" color={COLORS.darkGrey} size={15} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    margin: 10,
    borderBottomColor: COLORS.darkGrey,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 15,
    borderWidth: 1.5,
    borderColor: COLORS.darkGrey,
    padding: 5,
    height: 30,
    width: 30,
  },
  taskTitle: {
    color: COLORS.darkGrey,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TaskListCard;
