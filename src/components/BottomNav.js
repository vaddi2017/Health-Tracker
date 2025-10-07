import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BottomNav({ onHome, onProfile }) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={onHome}>
        <AntDesign name="home" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onProfile}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=12" }}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
});
