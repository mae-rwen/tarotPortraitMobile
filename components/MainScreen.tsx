import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import Introduction from "./Introduction";
import styles from "../styles/styles";
import DatePicker from "./DatePicker";
import LifeCard from "./LifeCard";

export default function MainScreen() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

   
   const [day, month, year] = (selectedDate?.toLocaleDateString("de-DE") || "")
   .split(".")
   .map(part => parseInt(part, 10));

  return (
    <ScrollView style={styles.mainContainer}>
      <Introduction />
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} day={day} month={month} year={year}/>
      <LifeCard/>
    </ScrollView>
  );
}
