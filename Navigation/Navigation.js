import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../Components/HomeScreen';
import CalendarScreen from '../Components/CalendarScreen';
import MailScreen from '../Components/MailScreen';
import ProfileScreen from '../Components/ProfileScreen';

// Importez vos images ici
const homeIcon = require('../assets/icons/home.png');
const calendarIcon = require('../assets/icons/calendar.png');
const mailIcon = require('../assets/icons/mail.png');
const profileIcon = require('../assets/icons/profile.png');

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === 'Home') {
              icon = homeIcon;
            } else if (route.name === 'Calendar') {
              icon = calendarIcon;
            } else if (route.name === 'Mail') {
              icon = mailIcon;
            } else if (route.name === 'Profile') {
              icon = profileIcon;
            }

            // Retournez le composant Image avec l'icône appropriée
            return <Image source={icon} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarActiveTintColor: '#1a75ff',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Mail" component={MailScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
