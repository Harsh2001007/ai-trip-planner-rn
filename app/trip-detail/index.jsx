import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function index() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);

  const formatData = (data) => {
    return JSON.parse(data);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripDetails(trip);
    console.log(JSON.parse(JSON.parse(trip).tripData).locationInfo.photoref);
  }, []);

  return (
    tripDetails && (
      <View>
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              JSON.parse(formatData(trip).tripData).locationInfo.photoref +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{ height: 300, width: "100%" }}
        />
      </View>
    )
  );
}
