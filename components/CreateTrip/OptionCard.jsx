import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        {
          padding: 25,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: Colors.GRAYLIGHT,
          borderRadius: 15,
        },
        selectedOption?.id == option?.id && { borderWidth: 2 },
      ]}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit-regular",
            color: Colors.BLACK,
          }}
        >
          {option.desc}
        </Text>
      </View>
      <Text style={{ fontSize: 35 }}>{option.icon}</Text>
    </View>
  );
}
