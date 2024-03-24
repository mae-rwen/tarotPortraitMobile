import React from "react";
import { Tabs } from "expo-router";
import * as IconsSolid from "react-native-heroicons/solid";
import * as IconsOutline from "react-native-heroicons/outline";
import { COLORS } from "../../constants/Themes";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.mainColor,
        tabBarStyle: {
          backgroundColor: COLORS.secondaryColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const IconComponent = focused
              ? IconsSolid.SparklesIcon
              : IconsOutline.SparklesIcon;
            return <IconComponent color={COLORS.mainColor} />;
          },
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          headerTitle: "Info",
          title: "Info",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const IconComponent = focused
              ? IconsSolid.InformationCircleIcon
              : IconsOutline.InformationCircleIcon;
            return <IconComponent color={COLORS.mainColor} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
