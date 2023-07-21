import React from 'react';
import PropsType from 'prop-types';
import { TouchableOpacity } from 'react-native';

const styles = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  elevation: 2,
};
export default function Container(props) {
  // console.log("###### styles ", styles)
  // console.log("###### styles123 ", styleContainer)
  return (
    <TouchableOpacity style={props.styleContainer} disabled={props.disabled} onPress={()=> props.onPress()}>
      {props.children}
    </TouchableOpacity>
  )
}
Container.propTypes = {
  disabled: PropsType.bool.isRequired,
  onPress: PropsType.func.isRequired,

};