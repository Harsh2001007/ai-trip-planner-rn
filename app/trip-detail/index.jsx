import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import FlightInfo from "../../components/Tripdetails/FlightInfo";
import HotelInfo from "../../components/Tripdetails/HotelInfo";
import PlannedTrip from "../../components/Tripdetails/PlannedTrip";

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
      <ScrollView>
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
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>
            {JSON.parse(formatData(trip).tripData).locationInfo.name}
          </Text>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Text>
              {moment(JSON.parse(formatData(trip).tripData).startDate).format(
                "DD MMM YYYY"
              )}
            </Text>
            <Text>⤐</Text>
            <Text>
              {moment(JSON.parse(formatData(trip).tripData).endDate).format(
                "DD MMM YYYY"
              )}
            </Text>
          </View>
          <Text>
            🚌 {JSON.parse(formatData(trip).tripData).travelerCount.title}
          </Text>
          <FlightInfo
            flightData={formatData(trip).tripPlan.travelPlan.flights}
          />

          <HotelInfo hotelData={formatData(trip).tripPlan.travelPlan.hotels} />

          <PlannedTrip
            details={formatData(trip).tripPlan.travelPlan.itinerary}
          />
        </View>

        {/* flight info  */}

        {/* hotel list  */}

        {/* trip day planner info  */}
      </ScrollView>
    )
  );
}
