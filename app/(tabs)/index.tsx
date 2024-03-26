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
        .toLocaleDateString("de-DE")
        .split(".")
        .map((part) => parseInt(part, 10))
    : [null, null, null];

  const getBirthCard = () => {
    if (!birthdate) {
      return null;
    }
    // console.log("Birthdate:", birthdate.toLocaleDateString("de-DE"));
    const birthdateString = birthdate.toLocaleDateString("de-DE");
    // console.log("Birthdate string:", birthdateString);
    const digits = birthdateString.split("").filter((val) => /\d/.test(val));
    // console.log("Digits:", digits);
    const num = digits.reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
    // console.log("Sum before reduction:", num);
    let finalNum = num;
    while (finalNum > 22) {
      finalNum -= 22;
    }
    //  console.log("Final number:", finalNum);
    return finalNum;
  };

  const firstSubmit = "Set your birthdate to reveal your Birthcard";
  const changeSubmit = "Change";

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleFont}>Tarot Portrait</Text>
      </View>
      {!birthdate && (
        <View>
          <DatePicker
            birthdate={birthdate}
            setBirthdate={setBirthdate}
            title={firstSubmit}
          />
        </View>
      )}
      {birthdate && (
        <View style={styles.submitChangeBD}>
          <Text style={styles.basicFont}>
            Your birthdate is: {day}.{month}.{year}
          </Text>

          <View style={styles.submitChangeBDbtns}>
            {!birthCard && (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setBirthCard(getBirthCard);
                  }}
                >
                  <Text style={styles.basicFont}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            <View>
              <DatePicker
                birthdate={birthdate}
                setBirthdate={setBirthdate}
                title={changeSubmit}
              />
            </View>
          </View>
        </View>
      )}
      {birthCard && (
        <View>
          <Text style={styles.basicFont}>
            Your Birthcard number is {birthCard}
          </Text>
        </View>
      )}
      <View>
        <BirthCard birthCard={birthCard} />
      </View>
    </View>
  );
};

export default index;
