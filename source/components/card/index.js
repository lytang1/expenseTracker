import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import CardContainer from './container';
import { Label, Title } from '../text/Title';
const styles = {
  cardLabel: {
    paddingTop: 16,
    paddingLeft: 16,
    color: '#fff',
  },
  cardValue: {
    marginBottom: 16,
    color: '#fff',
    width: '100%',
    textAlign: 'center'
  }
};
export default function Card({onPress=console.log(), disabled=false, currency='$', text, value, containerStyle={}}) {
  console.log("#### containerStyle ", containerStyle)
  return (
    <CardContainer onPress={()=> onPress()} disabled={disabled} styleContainer={containerStyle}>
      <Label text={text} style={styles.cardLabel} />
      <Title text={`${currency} ${value}`} style={styles.cardValue} />
    </CardContainer>
  )
}

Card.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  containerStyle:PropTypes.arrayOf(PropTypes.object, PropTypes.array),
}