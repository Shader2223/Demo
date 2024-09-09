import * as React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Booking from '../Booking/Booking';
import Background from '../Background/Background.js';
import Buying from '../Buying/Buying.js';
import Home from '../HomeScr/Home.js';
import Profile from '../Profile/Profile.js';

function HomeScreen() {
  return (
    <Background>
      <Home></Home>
    </Background>
  );
}

function BuyingScreen() {
  return (
    <Background>
      <Buying/>
    </Background>
  );
}

function AccountScreen() {
  return (
    <Background>
      <Profile></Profile>
    </Background>
  );
}

function BookingScreen() {
  return (
    <Background>
      <Booking/>
    </Background>
    
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./app_image/HomeActive.png')
                : require('./app_image/Home.png'); 
            } else if (route.name === 'Buying') {
              iconName = focused
                ? require('./app_image/BuyingActive.png')
                : require('./app_image/Buying.png'); 
            } else if (route.name === 'Account') {
              iconName = focused
                ? require('./app_image/AccountActive.png')
                : require('./app_image/Account.png'); 
            } else if (route.name === 'Booking') {
              iconName = focused
                ? require('./app_image/BookingActive.png')
                : require('./app_image/Booking.png'); 
            }

            return <Image source={iconName} style={{ width: 35, height: 35, marginTop: 2 }} />;
          },
          tabBarLabel: ({ focused }) => {
            let labelStyle = { fontSize: 13 }; 

            if (focused) {
              labelStyle = { ...labelStyle, fontSize: 14, fontWeight: 'bold', color: '#275317' };
            }

            return <Text style={labelStyle}>{route.name}</Text>;
          },
          tabBarStyle: {
            backgroundColor: 'rgba(139, 145, 152, 0.8)', 
            borderTopWidth: 0, 
            elevation: 0,  
            shadowOpacity: 10, 
            position: 'absolute', 
            paddingTop: 5,
       
          },
         
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Buying" component={BuyingScreen} />
        <Tab.Screen name="Booking" component={BookingScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />

      </Tab.Navigator>

  );
}

export default TabNavigator;
