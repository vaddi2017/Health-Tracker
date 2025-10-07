import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Gradient from "../../src/components/Gradient";
import BottomNav from "../../src/components/BottomNav";

const cards = [
  { title: "Creativity", img: "https://picsum.photos/400/200?1" },
  { title: "Wellness", img: "https://picsum.photos/400/200?2" },
  { title: "Community", img: "https://picsum.photos/400/200?3" },
];

export default function MainWellnessScreen({ navigation }) {
  return (
    <Gradient>
      <View style={styles.container}>
        {cards.map((c, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate("WellnessDetail")}
          >
            <ImageBackground source={{ uri: c.img }} style={styles.card}>
              <Text style={styles.cardText}>{c.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
      <BottomNav onHome={() => navigation.navigate("Feelings")} />
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
  card: {
    height: 120,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cardText: { color: "#fff", fontSize: 20, fontWeight: "700" },
});
