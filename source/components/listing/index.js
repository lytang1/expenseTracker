import React from 'react';
import { FlatList } from 'react-native';
import Card from '../card';
import CardWithDescription from '../card/cardWithDescription';
import theme from '../../theme';

const data = [
  { description: 'salary', amount: 250, date: '2023-08-01', currency:'$'},
  { description: 'sell product', amount: 200, date: '2023-07-15', currency:'$'},
  { description: 'earn from upwork', amount: 180, date: '2023-07-10', currency:'$'},
  { description: 'sell product', amount: 105, date: '2023-07-09', currency:'$'},
  { description: 'google adsense', amount: 165, date: '2023-08-23', currency:'$'},
]
export default function Listing(props) {
  function renderItem({item}){
    return (
      <CardWithDescription
        labelStyle={{color: props.labelStyle}}
        valueStyle={{color: props.valueStyle}}
        desStyle={{color: theme.Theme1.unselectedColor, textAlign: 'left', paddingLeft: 16, paddingRight: 16, paddingTop: 8}}
        description={item.description}
        value={item.amount}
        date={item.date}
        onPress={() => alert('press on card')}
        currency={item.currency}
        containerStyle={{backgroundColor: '#fff', paddingRight: 16, marginLeft: 16, marginRight: 16, marginBottom: 16 }}
      />
    )
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
    />
  )
}