import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const route = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/ai-trip-img.webp")}
        style={{ width: "100%", height: 550 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text style={{ textAlign: "center" }}>By Harsh Sachan</Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: Colors.GRAY,
            marginTop: 10,
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => route.push("auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit-medium",
              textAlign: "center",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: Colors.BLACK,
    padding: 15,
    borderRadius: 99,
    marginTop: "20%",
  },
});
