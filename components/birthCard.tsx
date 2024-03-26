import { View, Image } from "react-native";
import React from "react";
import { styles } from "../constants/Themes";
import * as cardImages from "../assets/tarotCards";

interface BirthCardProps {
  birthCard: number | null;
}

const BirthCard = ({ birthCard }: BirthCardProps) => {
  let shownCard: any;
  switch (birthCard) {
    case 1:
      shownCard = cardImages.magician;
      break;
    case 2:
      shownCard = cardImages.priestess;
      break;
    case 3:
      shownCard = cardImages.empress;
      break;
    case 4:
      shownCard = cardImages.emperor;
      break;
    case 5:
      shownCard = cardImages.hierophant;
      break;
    case 6:
      shownCard = cardImages.lovers;
      break;
    case 7:
      shownCard = cardImages.chariot;
      break;
    case 8:
      shownCard = cardImages.justice;
      break;
    case 9:
      shownCard = cardImages.hermit;
      break;
    case 10:
      shownCard = cardImages.fortune;
      break;
    case 11:
      shownCard = cardImages.strenght;
      break;
    case 12:
      shownCard = cardImages.hanged;
      break;
    case 13:
      shownCard = cardImages.death;
      break;
    case 14:
      shownCard = cardImages.temperance;
      break;
    case 15:
      shownCard = cardImages.devil;
      break;
    case 16:
      shownCard = cardImages.tower;
      break;
    case 17:
      shownCard = cardImages.star;
      break;
    case 18:
      shownCard = cardImages.moon;
      break;
    case 19:
      shownCard = cardImages.sun;
      break;
    case 20:
      shownCard = cardImages.judgement;
      break;
    case 21:
      shownCard = cardImages.world;
      break;
    case 22:
      shownCard = cardImages.fool;
      break;
    default:
      shownCard = cardImages.revers;
  }

  return (
    <View>
      <Image style={styles.homePageCard} source={shownCard} />
    </View>
  );
};

export default BirthCard;
