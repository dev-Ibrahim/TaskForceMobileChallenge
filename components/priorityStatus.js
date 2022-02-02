/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../assets/colors';

const PriorityStatus = ({priority}) => {
  const bgdColor =
    priority === 'high'
      ? COLORS.blackish
      : priority === 'medium'
      ? COLORS.lightGrey
      : COLORS.milkWhite;
  const textColor =
    priority === 1 ? COLORS.green : priority === 2 ? '#fff' : COLORS.darkGrey;
  return (
    <View
      style={{
        width: 70,
        borderRadius: 100,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgdColor,
        padding: 3,
        marginBottom: 15,
      }}>
      <Text style={{color: textColor, fontSize: 12}}>{priority}</Text>
    </View>
  );
};

export default PriorityStatus;
