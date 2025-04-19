import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  const onclickContinue = () => {
    router.replace("/create-trip/generate-trip");
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        paddingTop: 75,
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 35 }}>
        Review Your Trip
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          Before generating your trip, please review your trip
        </Text>

        {/* Destination info */}
        <View
          style={{
            marginTop: 50,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 40 }}>📍</Text>
          <View>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
            >
              Destination
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        {/* Date selection  */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 40 }}>🗓️</Text>
          <View>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
            >
              Travel Date
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData.endDate).format("DD MMM")}
              ({tripData?.totoalNoOfDays} days)
            </Text>
          </View>
        </View>

        {/* Travels info  */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 40 }}>🚌</Text>
          <View>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
            >
              Who is travelling?
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.travelerCount?.title}
            </Text>
          </View>
        </View>

        {/* Budget  */}

        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 40 }}>💰</Text>
          <View>
            <Text
              style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
            >
              Who is travelling?
            </Text>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.BLACK,
          borderRadius: 15,
          marginTop: 50,
        }}
        onPress={() => onclickContinue()}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
