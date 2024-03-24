import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/styles";

interface LifeCardProps {
  lifeCard: number;
}

export default function LifeCard({ lifeCard }: LifeCardProps) {
  return (
    <View style={styles.lifeCardContainer}>
      <Text>Life Card is</Text>
      <Text>{lifeCard}</Text>
    </View>
  );
}
