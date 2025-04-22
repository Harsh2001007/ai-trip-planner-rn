import { View, Text, FlatList, Image } from "react-native";
import React from "react";

export default function HotelInfo({ hotelData }) {
  return (
    <View style={{ marginTop: 15 }}>
      <Text>🏡 Hotel Recommendation</Text>
      <FlatList
        data={hotelData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 8 }}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20, width: 180 }}>
            {/* <Text>{item.hotelName}</Text> */}
            <Image
              source={require("./../../assets/images/ai-trip-img.webp")}
              style={{ width: 180, height: 130, borderRadius: 15 }}
            />
            <View>
              <Text style={{ fontFamily: "outfit-medium", fontSize: 17 }}>
                {item.hotelName}
              </Text>
              <View>
                <Text style={{ fontFamily: "outfit-medium" }}>
                  ⭐️ {item.rating}
                </Text>
                <Text style={{ fontFamily: "outfit-medium" }}>
                  💵 {item.price.currency} {item.price.estimate}/ night
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
