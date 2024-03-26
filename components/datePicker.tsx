import { View, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { styles } from "../constants/Themes";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerProps {
  setBirthdate: Dispatch<SetStateAction<Date | undefined>>;
  birthdate: Date | undefined;
}

const DatePicker = ({ setBirthdate, birthdate }: DatePickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showPicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    setBirthdate(selectedDate);
  };

  return (
    <View>
      <TouchableOpacity onPress={showPicker}>
        <Text style={styles.basicFont}>Set your birthdate</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={birthdate || new Date()}
          mode="date"
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
