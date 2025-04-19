import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/firebaseConfig";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const route = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onAccountCreate = () => {
    if (!email && !password && !fullName) {
      ToastAndroid.show("please enter all details", ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user, "&&&&&&&&");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, "******");
        ToastAndroid.show(error, ToastAndroid.LONG);
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
        Let's Sign You Up
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 30,
          color: Colors.GRAY,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 15,
          color: Colors.GRAY,
        }}
      >
        Fill up your details for sign up.
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text>Full Name</Text>
        <TextInput
          placeholder="Enter your full name"
          style={styles.input}
          onChangeText={(val) => setFullName(val)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          onChangeText={(val) => setEmail(val)}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
      </View>

      <TouchableOpacity style={styles.buttonTwo} onPress={onAccountCreate}>
        <Text
          style={{
            color: Colors.BLACK,
            textAlign: "center",
            fontFamily: "outfit-bold",
            fontSize: 16,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOne}
        onPress={() => route.replace("auth/sign-in")}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit-bold",
            fontSize: 16,
          }}
        >
          Want to Sign In ?
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
    marginTop: "20%",
    borderColor: Colors.BLACK,
    borderWidth: 1,
    borderBottomWidth: 10,
    borderLeftWidth: 5,
  },
  buttonOne: {
    backgroundColor: Colors.BLACK,
    padding: 15,
    borderRadius: 99,
    marginTop: "10%",
  },
});
