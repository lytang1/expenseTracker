import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from './container';
import { Label, SmallText } from '../text/Title';
import Row from '../row';
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
export default function CardWithDescription({onPress=console.log(), disabled=false, currency='$', description, value, date, containerStyle={}, labelStyle={}, valueStyle={}, desStyle={}}) {
  return (
    <CardContainer onPress={()=> onPress()} disabled={disabled} styleContainer={containerStyle}>
      <Row style={{justifyContent: 'space-between'}}>
        <Label text={date} style={[styles.cardLabel, labelStyle]} />  
        <Label text={`${currency} ${value}`} style={[styles.cardLabel, valueStyle]} />  
      </Row>
      <SmallText text={description} style={[styles.cardValue, desStyle]} />
    </CardContainer>
  )
}

CardWithDescription.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  containerStyle:PropTypes.arrayOf(PropTypes.object, PropTypes.array),
}