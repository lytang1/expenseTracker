import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, TouchableOpacity, Dimensions} from 'react-native';
import Listing from '../../components/listing';
import Card from '../../components/card';
import { Label, Title } from '../../components/text/Title';
import theme from '../../theme';
import tabs from '../../constants';
const {width, height} = Dimensions.get('window');
const styles = {
  selectedTab: {
    borderBottomWidth: 1,
    borderColor: theme.Theme1.primaryColor,
  },
  notSelectedTab: {
    borderBottomWidth: 0
  },
  selectedLabel: {
    color: theme.Theme1.primaryColor,
  },
  notSelectedLabel: {
    color: theme.Theme1.unselectedColor,
  }
}
export default function Income(props) {
  const [selectedTab, setSelectedTab] = useState(tabs.daily);

  return (
    <SafeAreaView style={{padding: 16, width: width}}>
      <Title text="Income" style={{paddingLeft: 16}} />
      <Card disabled onPress={()=>console.log()} currency='$' text='Total Earning' value='5000' containerStyle={{backgroundColor:theme.Theme1.primaryColor, margin:16, borderRadius:10}} />
      <View style={{flexDirection: 'row', width: width-32, justifyContent: 'space-between', marginLeft: 16}}>
        <TouchableOpacity onPress={()=> setSelectedTab(tabs.daily)} style={selectedTab===tabs.daily ?styles.selectedTab: styles.notSelectedTab}>
          <Label text='Daily' style={selectedTab===tabs.daily ? styles.selectedLabel: styles.unselectedColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelectedTab(tabs.monthly)} style={selectedTab===tabs.monthly ? styles.selectedTab:styles.unselectedColor}>
          <Label text='Monthly' style={selectedTab===tabs.monthly? styles.selectedLabel:styles.unselectedColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelectedTab(tabs.yearly)} style={selectedTab===tabs.yearly?styles.selectedTab:styles.unselectedColor}>
          <Label text='Yearly' style={selectedTab===tabs.yearly? styles.selectedLabel:styles.unselectedColor} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 16}}>
        <Listing
          labelStyle={{color: theme.Theme1.normalText}}
          valueStyle={{color: theme.Theme1.primaryColor}}
        />
      </View>
    </SafeAreaView>
  )
}