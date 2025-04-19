import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { GoogleGenAI } from "@google/genai";
import { useRouter } from "expo-router";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("prompting started");
    tripData && GenerateAiTrip();
  }, [tripData]);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replaceAll(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replaceAll("{totalDay}", tripData?.totoalNoOfDays)
      .replaceAll("{totalNight}", tripData?.totoalNoOfDays - 1)
      .replaceAll("{traveler}", tripData?.travelerCount?.title)
      .replaceAll("{budget}", tripData?.budget);

    const ai = new GoogleGenAI({
      apiKey: process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: FINAL_PROMPT,
    });

    console.log(response.text, "$$$$$$ received from API $$$$$$$$$");
    setLoading(false);
    router.navigate("(tabs)/mytrip");

    // console.log(FINAL_PROMPT, "this was final prompt");
  };
  return (
    <View
      style={{
        paddingTop: 75,
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{ fontFamily: "outfit-bold", fontSize: 35, textAlign: "center" }}
      >
        Please Wait....
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        We are working to generate your dream trip.
      </Text>

      <Image
        source={require("./../../assets/bus-ani.gif")}
        style={{ width: "100%", height: 200, objectFit: "contain" }}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          fontFamily: "outfit-bold",
          fontSize: 20,
          color: Colors.GRAY,
        }}
      >
        Do not go back at this step.
      </Text>
    </View>
  );
}
