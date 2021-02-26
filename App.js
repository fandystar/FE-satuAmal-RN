import React,{useEffect} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
//import HomeScreen from './TabScreens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
//import ProfileScreen from './TabScreens/ProfileScreen';
//import DonationsScreen from './TabScreens/DonationsScreen';
//import Tab from './screens/TabScreen';
import TabNavigator from './screens/TabNavigator';
import RecipientScreen from './screens/RecipientScreen';





const  TestingScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Testing !</Text>
    
    
    <Button
      title='Login'
      onPress={() => props.navigation.navigate('Login')}
    />
    <Button
      title='Register'
      onPress={() => props.navigation.navigate('Register')}
    />
    
    <Button
      title='Home'
      onPress={() => props.navigation.navigate('Home')}
    />
     
     <Button
      title='Donations'
      onPress={() => props.navigation.navigate('Donations')}
    />
     <Button
      title='Profile'
      onPress={() => props.navigation.navigate('Profile')}
    />
       <Button
      title='Tab Navigator'
      onPress={() => props.navigation.navigate('Tabs')}
    />
  
  
  </View>
  )
}

const Stack = createStackNavigator();

const  App = () => {
  return (
    
   
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                 headerShown: false
               }}>
                <Stack.Screen name='Testing' component={TestingScreen} />
                {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={SignUpScreen} />
                {/* <Stack.Screen name='Profile' component={ProfileScreen} /> */}
                <Stack.Screen name='Recipient' component={RecipientScreen} />
                <Stack.Screen name='Tabs' component={TabNavigator} />
           </Stack.Navigator>
        </NavigationContainer>

   
      )
}

export default App;