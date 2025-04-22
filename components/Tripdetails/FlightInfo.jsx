import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function FlightInfo({ flightData }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "black",
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          ✈️ Flights
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}
        >
          <Text style={{ color: "white" }}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 14, fontFamily: "outfit-medium" }}>
          {flightData.details.airline}
        </Text>
        <Text style={{ fontSize: 14, fontFamily: "outfit-medium" }}>
          Estimated Price - {flightData.price.currency}{" "}
          {flightData.price.estimate}
        </Text>
      </View>
    </View>
  );
}
