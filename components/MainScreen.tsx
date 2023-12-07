import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Introduction from "./Introduction";
import styles from "../styles/styles";
import DatePicker from "./DatePicker";
import LifeCard from "./LifeCard";

export default function MainScreen() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Introduction />
      <DatePicker/>
      <LifeCard/>
    </ScrollView>
  );
}
