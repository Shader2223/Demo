import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './Style';

const Court = ({ name, timeSlots }) => {
  const [selectedSlot, setSelectedSlot] = useState(null); // State for selected slot

  const handleCourt = (index) => {
    setSelectedSlot(index); // Update the state with the selected slot index
  };

  return (
    <View style={styles.courtContainer}>
      <View style={styles.court}>
        <Text style={styles.Text}>{name}</Text>
      </View>
      <View style={{ flex: 3 }}>
        {timeSlots.map((slot, index) => (
          <View key={index} style={{ flex: 1, flexDirection: 'row' }}>
            {slot.map((time, idx) => (
              <TouchableOpacity 
                key={idx} 
                style={[
                  styles.timeSlot,
                  selectedSlot === `${index}-${idx}` && { backgroundColor: 'black', blur: 0.5 } // Conditionally apply style
                ]}
                onPress={() => handleCourt(`${index}-${idx}`)} // Pass the selected index
              >
                <Text style={styles.timeText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const getDates = (numDays) => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < numDays; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    dates.push(date); 
  }

  return dates;
};

const DateDisplay = ({ date }) => {
  // Format the date using native JavaScript methods
  const dateObj = new Date(date);
  
  // Get day, date, and month
  const formattedDay = dateObj.toLocaleDateString('en-US', { weekday: 'short' }); 
  const dayNumber = dateObj.toLocaleDateString('en-US', { day: '2-digit' }); 
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' }); 

  return (
    <View style={styles.dateDisplayContainer}>
      <Text style={styles.dayText}>{formattedDay}</Text>
      <View style={styles.numberMonthContainer}>
        <Text style={styles.numberText}>{dayNumber}</Text>
        <Text style={styles.monthText}>{month}</Text>
      </View>
    </View>
  );
};

const Booking = () => {
  const courts = [
    { name: '1st Court', timeSlots: [['7h - 9h', '9h - 11h', '13h - 15h'], ['15h - 17h', '17h - 19h', '19h - 21h']] },
    { name: '2nd Court', timeSlots: [['7h - 9h', '9h - 11h', '13h - 15h'], ['15h - 17h', '17h - 19h', '19h - 21h']] },
    { name: '3rd Court', timeSlots: [['7h - 9h', '9h - 11h', '13h - 15h'], ['15h - 17h', '17h - 19h', '19h - 21h']] },
    { name: '4th Court', timeSlots: [['7h - 9h', '9h - 11h', '13h - 15h'], ['15h - 17h', '17h - 19h', '19h - 21h']] },
    { name: '5th Court', timeSlots: [['7h - 9h', '9h - 11h', '13h - 15h'], ['15h - 17h', '17h - 19h', '19h - 21h']] },
    { name: '6th Court', timeSlots: [['7h - 9h', '9h - 11h', '13h - 15h'], ['15h - 17h', '17h - 19h', '19h - 21h']] },
    { name: '7th Court', timeSlots: [['7h - 9h', '9h - 11h', '13h - 15h'], ['15h - 17h', '17h - 19h', '19h - 21h']] },
  ];

  const dates = getDates(7); 

  return (
   
      
    <ScrollView style={styles.container}>
        <ScrollView style={styles.dateContainer} horizontal={true}>
        {dates.map((date, index) => (
          <TouchableOpacity key={index} style={styles.date}>
            <DateDisplay date={date} />
          </TouchableOpacity>
        ))}
        </ScrollView>
        {courts.map((court, index) => (
        <Court key={index} name={court.name} timeSlots={court.timeSlots} />
        ))}
        <View style={{ height: 60}} />
    </ScrollView>
        
 
  );
};

export default Booking;
