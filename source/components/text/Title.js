import React from 'react';
import {Text} from 'react-native';

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelRegular: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  }
}
export function Title(props) {
  return (
    <Text {...props} style={[styles.title, props.style]}>
      {props.text}
    </Text>
  )
};

export function SubTitle(props) {
  return (
    <Text {...props} style={[styles.subTitle, props.style]}>
      {props.text}
    </Text>
  )
}

export function Label(props) {
  return (
    <Text {...props} style={[props.isBold ? styles.label: styles.labelRegular, props.style]}>
      {props.text}
    </Text>
  )
}

export function SmallText(props) {
  return (
    <Text {...props} style={[styles.smallText, props.style]}>
      {props.text}
    </Text>
  )
}