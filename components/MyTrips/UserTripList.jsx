import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const latestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();
  return (
    userTrips && (
      <View>
        <View style={{ marginTop: 20 }}>
          {latestTrip?.locationInfo?.photoref ? (
            <Image
              source={{
                uri:
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                  latestTrip?.locationInfo?.photoref +
                  "&key=" +
                  process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
              }}
              style={{ width: "100%", height: 240 }}
            />
          ) : (
            <Image
              source={require("./../../assets/images/ai-trip-img.webp")}
              style={{ width: "100%", height: 240 }}
            />
          )}

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontFamily: "outfit-medium" }}>
              {userTrips[0]?.tripPlan?.travelPlan?.location}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 17,
                  color: Colors.GRAY,
                }}
              >
                {moment(latestTrip.startDate).format("DD MMM YYYY")}
              </Text>
              <Text style={{ fontFamily: "outfit", fontSize: 17 }}>
                {latestTrip.travelerCount.title}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/trip-detail",
                  params: { trip: JSON.stringify(userTrips[0]) },
                })
              }
              style={{
                backgroundColor: Colors.BLACK,
                padding: 15,
                borderRadius: 15,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: Colors.WHITE,
                  fontSize: 18,
                  fontFamily: "outfit-medium",
                  textAlign: "center",
                }}
              >
                See Your Plan
              </Text>
            </TouchableOpacity>
          </View>
          {userTrips.map((item, index) => (
            <UserTripCard trip={item} key={index} />
          ))}
        </View>
        <Text></Text>
      </View>
    )
  );
}
