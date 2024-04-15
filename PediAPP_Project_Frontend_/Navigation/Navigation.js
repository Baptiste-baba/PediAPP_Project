import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import HomeScreen from '../Components/HomeScreen';
import CalendarScreen from '../Components/CalendarScreen';
import MailScreen from '../Components/MailScreen';
import ProfileScreen from '../Components/ProfileScreen';
import MakeAppointmentScreen from '../Components/MakeAppointmentScreen';
import LoginScreen from '../Components/LoginScreen';
import RegisterScreen from '../Components/RegisterScreen';
import DiseaseInfoScreen from '../Components/DiseaseInfoScreen';

// Importez vos images ici
const homeIcon = require('../assets/icons/home.png');
const calendarIcon = require('../assets/icons/calendar.png');
const mailIcon = require('../assets/icons/mail.png');
const profileIcon = require('../assets/icons/profile.png');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CalendarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MakeAppointmentScreen" component={MakeAppointmentScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DiseaseInfoScreen" component={DiseaseInfoScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
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
          return <Image source={icon} style={{ width: size, height: size, tintColor: color }} />;
        },
        tabBarActiveTintColor: '#1a75ff',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Calendar" component={CalendarStack} options={{ headerShown: false }} />
      <Tab.Screen name="Mail" component={MailScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;