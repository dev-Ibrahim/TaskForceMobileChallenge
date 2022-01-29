/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {COLORS} from './assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyAppText from './components/myAppText';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  Header: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.darkGrey,
    height: '30%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20,
  },
  BottomContainer: {
    flex: 3,
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
  },
  logo: {
    width: 40,
    height: 40,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Image
          style={styles.logo}
          source={require('./assets/logo/IW_logo.png')}
        />
        <View>
          <Text>
            <Icon name="search" color="#fff" size={30} />;
            <Icon name="filter-list" color="#fff" size={30} />;
          </Text>
        </View>
      </View>
      <View style={styles.BottomContainer} />
      <View style={styles.contentWrapper}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>
    </View>
  );
};

export default App;
