import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import Introduction from "./Introduction";
import styles from "../styles/styles";
import DatePicker from "./DatePicker";
import LifeCard from "./LifeCard";

export default function MainScreen() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); 

  const birthDate = "22.12.1989";
  //"22.12.1989";
  //(selectedDate?.toLocaleDateString("de-DE") || "")

  const [day, month, year] = birthDate
    .split(".")
    .map((part) => parseInt(part, 10));  

  const getLifeCard = () => {
    let num = birthDate
      .split("")
      .filter((val) => val !== ".")
      .reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0);
    while (num > 22) {
      num -= 22;
    }
    return num;
  };
  getLifeCard();

  const lifeCard: number = getLifeCard();
  // console.log(`Life Card is ${lifeCard}`);
  // console.log(typeof lifeCard);

  return (
    <ScrollView style={styles.mainContainer}>
      <Introduction />
      <DatePicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        day={day}
        month={month}
        year={year}
      />
      <LifeCard lifeCard={lifeCard}/>
    </ScrollView>
  );
}
