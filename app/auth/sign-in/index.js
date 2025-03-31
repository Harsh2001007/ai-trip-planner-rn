import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Signin() {
  const navigation = useNavigation();

  const route = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 30,
          color: Colors.GRAY,
        }}
      >
        Welcom Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 30,
          color: Colors.GRAY,
        }}
      >
        You've been missed
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text>Email</Text>
        <TextInput placeholder="Enter Email" style={styles.input} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.buttonOne}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit-bold",
            fontSize: 16,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTwo}
        onPress={() => route.replace("auth/sign-up")}
      >
        <Text
          style={{
            color: Colors.BLACK,
            textAlign: "center",
            fontFamily: "outfit-bold",
            fontSize: 16,
          }}
        >
          Want to create Account ?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: Colors.WHITE,
    height: "100%",
    paddingTop: 60,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.BLACK,
  },
  buttonTwo: {
    backgroundColor: Colors.White,
    padding: 15,
    borderRadius: 99,
    marginTop: "10%",
    borderColor: Colors.BLACK,
    borderWidth: 1,
    borderBottomWidth: 10,
    borderLeftWidth: 5,
  },
  buttonOne: {
    backgroundColor: Colors.BLACK,
    padding: 15,
    borderRadius: 99,
    marginTop: "20%",
  },
});
