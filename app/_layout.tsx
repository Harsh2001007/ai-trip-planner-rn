import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { useState } from "react";
import { CreateTripContext } from "./../context/CreateTripContext";

export default function RootLayout() {
  const [tripData, setTripData] = useState([]);

  useFonts({
    "outfit-regular": require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <>
      <CreateTripContext.Provider value={{ tripData, setTripData }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </CreateTripContext.Provider>
    </>
  );
}
