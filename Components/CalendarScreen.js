// CalendarScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Calendar Screen!</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarScreen;