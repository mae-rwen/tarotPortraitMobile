import { Text, View } from "react-native";
import React from "react";
import { styles } from "../../constants/Themes";

const index = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleFont}>Tarot Portrait</Text>
      </View>
      <View>
        <Text style={styles.basicFont}>Middle view</Text>
      </View>
      <View>
        <Text style={styles.basicFont}>Submit birthdate</Text>
      </View>
    </View>
  );
};

export default index;
