import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import Card from '../../components/card';
import theme from '../../theme';
import { Title } from '../../components/text/Title';

const styles = {
  primaryContainer: {
    backgroundColor: theme.Theme1.primaryColor,
    height: 'auto',
    borderRadius: 10,
  },
  expenseContainer: {
    backgroundColor: theme.Theme1.alertColor,
    height: 'auto',
    borderRadius: 10,
  },
  savingContainer: {
    backgroundColor: theme.Theme1.warnColor,
    height: 'auto',
    borderRadius: 10,
  },
  planningContainer: {
    backgroundColor: theme.Theme1.infoColor,
    height: 'auto',
    borderRadius: 10,
  },
  section: {
    margin: 16
  },
  label: {
    marginBottom: 16
  }
}
export function HomeScreen(props) {
  return (
    <SafeAreaView>
      <View style={styles.section}>
        <Title text='Earning' style={styles.label}/>
        <Card
          text='Total'
          value={Number(900).toFixed(2)}
          currency='$'
          containerStyle={styles.primaryContainer}
          onPress={()=> props.navigation.navigate('IncomeList')}
        />
      </View>
      <View style={styles.section}>
        <Title text='Expense' style={styles.label}/>
        <Card text='Total'
          value={Number(400).toFixed(2)}
          currency='$'
          containerStyle={styles.expenseContainer}
          onPress={()=> props.navigation.navigate('ExpenseList')}
        />
      </View>
      <View style={styles.section}>
        <Title text='Saving' style={styles.label}/>
        <Card
          text='Total'
          value={Number(500).toFixed(2)}
          currency='$'
          containerStyle={styles.savingContainer}
          disabled
        />
      </View>
      <View style={styles.section}>
        <Title text='Planning' style={styles.label}/>
        <Card
          text='Total'
          value={Number(200).toFixed(2)}
          currency='$'
          containerStyle={styles.planningContainer}
          disabled
        />
      </View>
    </SafeAreaView>
  )
}