/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const MyAppText = ({text, textColor}) => {
  return (
    <Text
      style={{
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: textColor,
        fontWeight: 'bold',
      }}>
      {text}
    </Text>
  );
};

export default MyAppText;
