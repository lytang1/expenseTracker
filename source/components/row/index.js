import React from 'react';
import {View} from 'react-native';

export default function Row(props) {
  return (
    <View style={[{flexDirection: 'row'},  props.style]}>
      {props.children}
    </View>
  )
}