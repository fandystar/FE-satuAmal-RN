import React from 'react';
//import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
//import EditProfileScreen from './EditProfileScreen';
import HomeScreen from '../tabScreens/HomeScreen'
import ProfileScreen from '../tabScreens/ProfileScreen';
import DonationsScreen from '../tabScreens/DonationsScreen';



const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        //headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle' : 'user-circle';
          } else if (route.name === 'Donations') {
            iconName = focused ? 'comments' : 'comments';
          }else if (route.name === 'Live') {
            iconName = focused ? 'youtube' : 'youtube';
          }
          
          
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#367874',
        inactiveTintColor: 'gray',
       
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Donations" component={DonationsScreen} />
      
      {/* <Tab.Screen name="Buat Grup" component={GroupScreen} /> */}
      
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>


  );
}

export default TabNavigator;