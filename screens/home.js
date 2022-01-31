/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';
import TaskCountCard from '../components/tasksCountCard';

const HomeScreen = ({navigation}) => {
  const PRIORITY = {
    high: 1,
    medium: 2,
    low: 3,
  };
  const {task, setTask} = useState([
    {
      title: 'Buy hand sanitizers',
      description: 'Call to confirm with quantity',
      priority: PRIORITY.medium,
      dateCreated: Date.now,
      dateModified: Date.now,
    },
    {
      title: 'CAll awesomity',
      description: 'Just call',
      priority: PRIORITY.low,
      dateCreated: Date.now,
      dateModified: Date.now,
    },
    {
      title: 'Submit challenge',
      description: 'Just do it',
      priority: PRIORITY.high,
      dateCreated: Date.now,
      dateModified: Date.now,
    },
    {
      title: 'Submit challenge',
      description: 'Just do it',
      priority: PRIORITY.high,
      dateCreated: Date.now,
      dateModified: Date.now,
    },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <View style={styles.BottomContainer} />
          <View style={styles.contentWrapper}>
            <Text style={styles.headerText}>Welcome</Text>
            <View style={styles.cardsHolder}>
              <TaskCountCard count="0" name="Total Tasks" />
              <TaskCountCard count="0" name="Active Tasks" />
              <TaskCountCard count="0" name=" Tasks Done" />
              <TaskCountCard count="0" name="Active High Priority" />
            </View>
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
                onPress={() => navigation.navigate('Add')}>
                <Text style={{color: COLORS.milkWhite}}>
                  START WITH A NEW TASK
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                position: 'absolute',
                backgroundColor: COLORS.blackish,
                right: 10,
                bottom: 100,
                width: 70,
                height: 70,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Icon name="add" color="#fff" size={25} />
            </TouchableOpacity>
          </View>
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
    justifyContent: 'center',
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
});

export default HomeScreen;
