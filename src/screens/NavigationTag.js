import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'
import File from '../screens/File';
import Home from '../screens/Home';
import Examination_Form from '../screens/Examination_Form';
import Account from '../screens/Account';
import Notification from '../screens/Notification';
const Tab = createBottomTabNavigator();
export default function NavigationTag() {
  return (

    <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === "File") {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === "Examination_Form") {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === "Notification") {
          iconName = focused ? 'notifications' : 'notifications-circle';
        }
        else if (route.name === "Account") {
          iconName = focused ? 'people' : 'people-circle';
        }
        return <Ionic name={iconName} size={size} color={color} />; 
      },
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}  />
      <Tab.Screen name="File" component={File}  options={{headerShown:false}}/>
      <Tab.Screen name="Examination_Form" component={Examination_Form} options={{headerShown:false}} />
      <Tab.Screen name="Notification" component={Notification} options={{headerShown:false}}/>
      <Tab.Screen name="Account" component={Account} options={{headerShown: false}}  />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})