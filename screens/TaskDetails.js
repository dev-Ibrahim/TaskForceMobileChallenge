import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../assets/colors';
import PriorityStatus from '../components/priorityStatus';
import {deleteTask, taskComplete} from '../utilities/database';
import {useSelector, useDispatch} from 'react-redux';
import {setAllTasks, toggleActive} from '../redux/actions';

const TaskDetails = ({route, navigation}) => {
  const task = route.params;
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, padding: 30, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <PriorityStatus priority={task.Priority} />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.actionIcons}
            onPress={() => {
              navigation.navigate('AddEdit', task);
            }}>
            <Icon name="edit" color={COLORS.darkGrey} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionIcons}
            onPress={() => {
              deleteTask(task.ID);
              navigation.navigate('Home');
            }}>
            <Icon name="clear" color={COLORS.darkGrey} size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => {
              taskComplete(task.ID, task.isActive);
              dispatch(toggleActive(task));
              navigation.navigate('Home');
            }}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.headerText}>{task.Title}</Text>
        <Text
          style={{
            marginTop: 30,
            color: COLORS.blackish,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Description
        </Text>
        <Text
          style={{
            color: COLORS.lightGrey,
            fontSize: 17,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {task.Description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 12, marginRight: 10}}>
            Created {task.DateCreated}
          </Text>
          <Text style={{fontSize: 12}}>Modified {task.DateModified}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionIcons: {
    justifyContent: 'flex-start',
    alignItem: 'center',
    padding: 3,
    marginRight: 20,
    backgroundColor: COLORS.milkWhite,
  },
  doneBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    padding: 3,
    borderWidth: 1.3,
    borderColor: COLORS.darkGrey,
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: COLORS.darkGrey,
    marginTop: 25,
  },
});
export default TaskDetails;
