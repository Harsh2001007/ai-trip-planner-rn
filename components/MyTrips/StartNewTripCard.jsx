import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "space-between",
        height: "40%",
        borderRadius: 20,
      }}
    >
      <Ionicons name="location-sharp" size={30} color={"black"} />
      <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
        No trips planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-regular",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its time to plan a new travel experience get started below
      </Text>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.BLACK,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
        onPress={() => router.push("/create-trip/search-place")}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 17,
            fontFamily: "outfit-medium",
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
