import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CalendarScreen = () => {
    const [appointments, setAppointments] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch('http://172.20.10.11:3000/api/appointments')
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
          <View style={styles.container_0}>
            <Text style={styles.header}>My appointments</Text>
          </View>  
          <View style={styles.container_1}>
              <Text style={styles.tab}>Coming soon</Text>
              <Text style={styles.tab}>Past</Text>
          </View>
          <View style={styles.container_2}>
            <FlatList
              data={appointments}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.appointmentHeader}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Image source={require('../assets/icons/clock_icon.png')} style={styles.icon} />
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                  <View style={styles.appointmentCard}>
                    <Text style={styles.doctor}>Doctor {item.doctorName}</Text>
                    <Text style={styles.details}>FOR {item.speciality}</Text>
                    <Text style={styles.address}>{item.address}</Text>
                    <TouchableOpacity style={styles.moreButton}>
                        <Image source={require('../assets/icons/arrow.png')} style={styles.moreIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={item => item._id}
            />
          </View>
          <View style={styles.container_3}>
            <TouchableOpacity 
            style={styles.makeAppointmentButton}
            onPress={() => navigation.navigate('MakeAppointmentScreen')}
            >
                <Text style={styles.buttonText}>MAKE AN APPOINTMENT</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    container_0: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3399ff',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
    header: {
      fontSize: 24,
      marginTop: '10%',
      color: '#ffffff',
      marginBottom: 20,
    },
    container_1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    tab: {
      fontSize: 18,
      color: '#000',
    },
    container_2: {
      flex: 5,
      justifyContent: 'center',
    },
    appointmentCard: {
      backgroundColor: '#ffffff',
      padding: 20,
      marginHorizontal: 25,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      flexDirection: 'column',
      alignItems: 'center',
    },
    appointmentHeader: {
      height: 50,
      borderRadius: 20,
      backgroundColor: '#3385ff',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginHorizontal: 16,
    },
    card: {
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    date: {
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    time: {
      fontSize: 16,
      color: '#ffffff',
      marginLeft: 10,
    },
    doctor: {
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold',
    },
    details: {
      fontSize: 14,
      color: '#000',
    },
    address: {
      fontSize: 14,
      color: '#000',
    },
    icon: {
      width: 20,
      height: 20,
      marginLeft: 10,
    },
    moreButton: {
      marginLeft: 'auto',
    },
    moreIcon: {
      width: 30,
      height: 30,
    },
    container_3: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',

    },
    makeAppointmentButton: {
      backgroundColor: '#4169E1',
      padding: 15,
      margin: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default CalendarScreen;
