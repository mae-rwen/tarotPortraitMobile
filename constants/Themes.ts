import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

interface Colors {
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
}

const COLORS: Colors = {
  mainColor: "#61447E",
  secondaryColor: "#F7F4FB",
  accentColor: "#363963",
};

interface FontSize {
  smallFont: number;
  mediumFont: number;
  largeFont: number;
}

const FONTSIZE: FontSize = {
  smallFont: 8,
  mediumFont: 14,
  largeFont: 20,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryColor,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  basicFont: {
    color: COLORS.mainColor,
    fontSize: FONTSIZE.mediumFont,
    // textAlign: "center",
  },
  titleFont: {
    color: COLORS.mainColor,
    fontSize: FONTSIZE.largeFont,
    fontWeight: "bold",
  },
  introductionText: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export { width, height, COLORS, FONTSIZE, styles };
