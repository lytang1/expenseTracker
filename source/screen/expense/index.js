import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, TouchableOpacity, Dimensions} from 'react-native';
import Listing from '../../components/listing';
import Card from '../../components/card';
import { Label, Title } from '../../components/text/Title';
import theme from '../../theme';
import constant from '../../constants';
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
export default function Expense(props) {
  const [selectedTab, setSelectedTab] = useState(constant.tabs.daily);

  return (
    <SafeAreaView style={{padding: 16, width: width}}>
      <Title text="Expense" style={{padding: 16}}/>
      <Card disabled onPress={()=>console.log()} currency='$' text='Total Earning' value='5000' containerStyle={{backgroundColor:theme.Theme1.alertColor, margin:16, borderRadius:10}} />
      <View style={{flexDirection: 'row', width: width-32, justifyContent: 'space-between', marginLeft: 16}}>
        <TouchableOpacity onPress={()=> setSelectedTab(constant.tabs.daily)} style={selectedTab===constant.tabs.daily ?styles.selectedTab: styles.notSelectedTab}>
          <Label text='Daily' style={selectedTab===constant.tabs.daily ? styles.selectedLabel: styles.unselectedColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelectedTab(constant.tabs.monthly)} style={selectedTab===constant.tabs.monthly ? styles.selectedTab:styles.unselectedColor}>
          <Label text='Monthly' style={selectedTab===constant.tabs.monthly? styles.selectedLabel:styles.unselectedColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setSelectedTab(constant.tabs.yearly)} style={selectedTab===constant.tabs.yearly?styles.selectedTab:styles.unselectedColor}>
          <Label text='Yearly' style={selectedTab===constant.tabs.yearly? styles.selectedLabel:styles.unselectedColor} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 16}}>
        <Listing
          labelStyle={{color: theme.Theme1.normalText}}
          valueStyle={{color: theme.Theme1.alertColor}}
        />
      </View>
    </SafeAreaView>
  )
}