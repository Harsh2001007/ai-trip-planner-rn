import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function GenerateTrip() {
  return (
    <View
      style={{
        paddingTop: 75,
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{ fontFamily: "outfit-bold", fontSize: 35, textAlign: "center" }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        We are working to generate your dream trip
      </Text>

      <Image
        source={require("./../../assets/bus-ani.gif")}
        style={{ width: "100%", height: 200, objectFit: "contain" }}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          fontFamily: "outfit-bold",
          fontSize: 20,
          color: Colors.GRAY,
        }}
      >
        Do not go back at this step.
      </Text>
    </View>
  );
}
