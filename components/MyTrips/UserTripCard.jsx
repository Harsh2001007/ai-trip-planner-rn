import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";

export default function UserTripCard({ trip }) {
  const formatData = (data) => {
    return JSON.parse(data);
  };
  return (
    <View
      style={{
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={require("./../../assets/images/ai-trip-img.webp")}
        style={{ height: 100, width: 100 }}
      />
      <View>
        <Text>{trip.tripPlan?.travelPlan?.location}</Text>
        <Text>
          {moment(formatData(trip.tripData).startDate).format("DD MMM YYYY")}
        </Text>
        <Text>{formatData(trip.tripData).travelerCount.title}</Text>
      </View>
    </View>
  );
}
