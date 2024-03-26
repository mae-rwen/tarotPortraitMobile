import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../constants/Themes";
import DatePicker from "../../components/datePicker";
import BirthCard from "../../components/birthCard";
import { TurboModuleRegistry } from "react-native";

const index = () => {
  const [birthdate, setBirthdate] = useState<Date | undefined>(undefined);
  const [birthCard, setBirthCard] = useState<number | null>(null);

  // useEffect(() => {}, []);

  const [day, month, year] = birthdate
    ? birthdate
        .toLocaleString("de-DE")
        .split(".")
        .map((part) => parseInt(part, 10))
    : [null, null, null];

  const getBirthCard = () => {
    if (!birthdate) {
      return 0;
    }
    let num = birthdate
      .toLocaleDateString("de-DE")
      .split("")
      .filter((val) => val !== ".")
      .reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0);
    while (num > 22) {
      num -= 22;
    }
    console.log(typeof num, num);
    return num;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleFont}>Tarot Portrait</Text>
      </View>
      <View>
        <BirthCard birthCard={birthCard} />
      </View>
      <View>
        <DatePicker birthdate={birthdate} setBirthdate={setBirthdate} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setBirthCard(getBirthCard);
          }}
        >
          <Text>Test</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>
          The birth date: {day}.{month}.{year}
        </Text>
      </View>
    </View>
  );
};

export default index;
