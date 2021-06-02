import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddRemindersScreen from '../screens/AddRemindersScreen';
import AllRemindersScreen from '../screens/AllRemindersScreen';

export const AppTabNavigator = createBottomTabNavigator({
    AddReminder : {
      screen: AddRemindersScreen,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/AddReminders.png")} style={{width:45, height:45, marginBottom:10}}/>,
        tabBarLabel : "AddReminder",
      }
    },
    AllReminder: {
      screen: AllRemindersScreen,
      navigationOptions :{
        tabBarIcon : <Image source={require("../assets/AllReminders.png")} style={{width:50, height:50, marginBottom:10}}/>,
        tabBarLabel : "Reminders",
      }
    }
  });