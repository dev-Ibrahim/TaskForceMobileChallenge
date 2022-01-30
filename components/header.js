import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../assets/colors';

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.darkGrey,
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
});

const Header = () => {
  return (
    <View style={styles.Header}>
      <Image
        style={styles.logo}
        source={require('../assets/logo/IW_logo.png')}
      />
      <View>
        <Text>
          <Icon name="search" color="#fff" size={30} />;
          <Icon name="filter-list" color="#fff" size={30} />;
        </Text>
      </View>
    </View>
  );
};

export default Header;
