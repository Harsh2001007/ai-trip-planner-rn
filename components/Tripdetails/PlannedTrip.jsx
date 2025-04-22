import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React from "react";

export default function PlannedTrip({ details }) {
  console.log(details);
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
        🏕️ Plan Detail
      </Text>

      {Object.entries(details).map(([dayKey, dayData]) => (
        <View key={dayKey} style={styles.dayBlock}>
          <Text style={styles.dayTitle}>{dayKey.toUpperCase()}</Text>

          {Object.entries(dayData).map(([slotKey, slotData]) => {
            if (slotKey === "date") return null;

            return (
              <View key={slotKey} style={styles.card}>
                <Text style={styles.timeSlot}>
                  {slotKey.toUpperCase()} - {slotData.time}
                </Text>
                <Text style={styles.activity}>{slotData.activity}</Text>

                {slotData.placeName && (
                  <Text style={styles.place}>
                    <Text style={{ fontWeight: "bold" }}>🏡 Place:</Text>{" "}
                    {slotData.placeName}
                  </Text>
                )}

                {slotData.placeDetails && (
                  <Text style={styles.details}>{slotData.placeDetails}</Text>
                )}

                {/* {slotData.placeImageUrl && (
                  <Image
                    source={{ uri: slotData.placeImageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                )} */}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
  },
  dayBlock: {
    marginBottom: 24,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#444",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    marginTop: 10,
  },
  timeSlot: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
  activity: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
    color: "#222",
  },
  place: {
    fontSize: 15,
    marginTop: 4,
    color: "#333",
  },
  details: {
    fontSize: 14,
    marginTop: 2,
    color: "black",
    fontFamily: "outfit-regular",
  },
  image: {
    width: "100%",
    height: 180,
    marginTop: 10,
    borderRadius: 8,
  },
  desc: {
    fontSize: 12,
    marginTop: 2,
    color: "black",
  },
});
