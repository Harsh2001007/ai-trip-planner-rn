import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { db, auth } from "./../../configs/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import UserTripList from "../../components/MyTrips/UserTripList";

export default function Mytrip() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    user && GetUserTrip();
  }, [user]);

  const GetUserTrip = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user.email)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setUserTrips((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };
  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      {loading && <ActivityIndicator size={"large"} color={"black"} />}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          My Trips
        </Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>

      {userTrips.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrips} />
      )}
    </ScrollView>
  );
}
