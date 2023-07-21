import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/home';
import Expense from '../screen/expense';
import Income from '../screen/income';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IncomeList" component={Income} />
      <Stack.Screen name="ExpenseList" component={Expense} />
      <Stack.Screen name="PlanningList" component={HomeScreen} />
    </Stack.Navigator>
  );
}