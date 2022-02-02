/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {COLORS} from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';
import TaskCountCard from '../components/tasksCountCard';
import {db, createTable} from '../utilities/database';
import {useSelector, useDispatch} from 'react-redux';
import {setAllTasks} from '../redux/actions';
import TaskListCard from '../components/taskListCard';

const HomeScreen = ({navigation}) => {
  const PRIORITY = {
    high: 1,
    medium: 2,
    low: 3,
  };
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();
  let ActiveTasks = tasks.filter(task => task.isActive).length;
  let totalTasks = tasks.length;
  let completeTasks = totalTasks - ActiveTasks;

  const getTasks = () => {
    let tasksArr = [];
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM ToDoTasks', [], (tx, results) => {
        for (let i = 0; i < results.rows.length; i++) {
          tasksArr.push(results.rows.item(i));
        }
        dispatch(setAllTasks(tasksArr));
      });
    });
  };
  useEffect(() => {
    createTable();
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let content;
  getTasks();
  if (tasks.length === 0) {
    content = (
      <View
        style={{
          height: '20%',
          margin: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 40,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              margin: 15,
              color: COLORS.darkGrey,
            }}>
            NOTHING HERE
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: COLORS.lightGrey,
            }}>
            Just like your crush's replies
          </Text>
        </View>
        <TouchableOpacity
          style={styles.startNewTaskBtn}
          onPress={() => navigation.navigate('AddEdit')}>
          <Text style={{color: COLORS.milkWhite}}>START WITH A NEW TASK</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <View style={styles.BottomContainer} />
          <SafeAreaView
            style={styles.contentWrapper}
            edges={['bottom']}
            initialMetrics={initialWindowMetrics}>
            <Text style={styles.headerText}>Welcome</Text>
            <View style={styles.cardsHolder}>
              <TaskCountCard count={totalTasks} name="Total Tasks" />
              <TaskCountCard count={ActiveTasks} name="Active Tasks" />
              <TaskCountCard count={completeTasks} name=" Tasks Done" />
            </View>
            {content}
            <FlatList
              data={tasks}
              keyExtractor={item => item.ID}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Details', item);
                    }}>
                    <TaskListCard item={item} />
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity
              style={styles.floatingBtn}
              onPress={() => {
                navigation.navigate('AddEdit');
              }}>
              <Icon name="add" color="#fff" size={25} />
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: COLORS.darkGrey,
    marginTop: 25,
    marginLeft: 20,
  },
  BottomContainer: {
    flex: 2,
    backgroundColor: COLORS.milkWhite,
  },
  contentWrapper: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 80,
    width: '90%',
    height: '100%',
    marginLeft: 20,
    marginRight: 20,
    zIndex: 10,
  },
  cardsHolder: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  startNewTaskBtn: {
    backgroundColor: COLORS.blackish,
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
  },
  floatingBtn: {
    position: 'absolute',
    backgroundColor: COLORS.blackish,
    right: 10,
    bottom: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default HomeScreen;
