import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../styles/styles";

interface DatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  day: number | null;
  month: number | null;
  year: number | null;
}

export default function DatePicker({selectedDate, setSelectedDate, day, month, year}: DatePickerProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);  

// to show the date picker only when called 
  const showPicker = () => {
    setShowDatePicker(true);
  };

//set the selected date to the chosen from picker  
  const onDateChange = (event: Event, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };   

  return (
    <View style={styles.datePickerContainer}>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange as any}
        />
      )}

      <TouchableOpacity onPress={showPicker}>
        <Text>Pick your Birthdate</Text>
      </TouchableOpacity>

      {selectedDate && (
        <Text>
          Selected Date: {day}.{month}.{year}
        </Text>
      )}
    </View>
  );
}
