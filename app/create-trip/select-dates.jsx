import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function selectdates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  const onDateChange = (date, type) => {
    if (type == "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const OnDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("please select start and end date");
      return;
    }

    const totoalNoOfDays = endDate.diff(startDate, "days");

    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totoalNoOfDays: totoalNoOfDays + 1,
    });
    router.push("/create-trip/select-budget");
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
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 35, marginTop: 20 }}>
        Select Your Travel Dates
      </Text>

      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.BLACK,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.BLACK,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        {/* <Link href={""}> */}
        <Text
          style={{
            fontFamily: "outfit-bold",
            textAlign: "center",
            color: Colors.WHITE,
            fontSize: 20,
          }}
        >
          Continue
        </Text>
        {/* </Link> */}
      </TouchableOpacity>
    </View>
  );
}
