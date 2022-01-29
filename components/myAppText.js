/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const MyAppText = ({text}) => {
  return (
    <Text
      style={{
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        fontWeight: 'bold',
      }}>
      {text}
    </Text>
  );
};

// const MyAppHeaderText = ({text}) => {
//     return(
//         MyAppText
//     )
// }

export default MyAppText;
