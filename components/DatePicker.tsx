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

export default function DatePicker() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const showPicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event: Event, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
    }
  };

  const [day, month, year] = (
    selectedDate?.toLocaleDateString("de-DE") || ""
  ).split(".");

   //console.log("The year is " + year)
  //console.log("The day is " + day)
  // console.log("The month is " + month)
 // console.log(day+month)

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
