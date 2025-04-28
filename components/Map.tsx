import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import { useLocationStore } from "@/store";

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const region = calculateRegion({});

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={(styles.map, StyleSheet.absoluteFill)}
      tintColor={"black"}
      mapType={"mutedStandard"}
      showsPointsOfInterest={false}
      // initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle={"light"}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    borderRadius: "1rem",
  },
});

export default Map;
