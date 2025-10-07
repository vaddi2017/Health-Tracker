import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Gradient from "../../src/components/Gradient";

const feelings = [
  { name: "Happy", img: "https://img.icons8.com/emoji/96/000000/smiling-face.png" },
  { name: "Sad", img: "https://img.icons8.com/emoji/96/000000/crying-face.png" },
  { name: "Mad", img: "https://img.icons8.com/emoji/96/000000/angry-face.png" },
  { name: "Hurt", img: "https://img.icons8.com/emoji/96/000000/pensive-face.png" },
  { name: "Confused", img: "https://img.icons8.com/emoji/96/000000/confused-face.png" },
  { name: "Meh", img: "https://img.icons8.com/emoji/96/000000/neutral-face.png" },
];

export default function FeelingsScreen({ navigation }) {
  return (
    <Gradient>
      <View style={styles.container}>
        <Text style={styles.title}>How Are You Feeling Today?</Text>
        <View style={styles.grid}>
          {feelings.map((f, i) => (
            <TouchableOpacity key={i} onPress={() => navigation.navigate("MainWellness")}>
              <Image source={{ uri: f.img }} style={styles.icon} />
              <Text style={styles.label}>{f.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { color: "#fff", fontSize: 22, fontWeight: "600", marginBottom: 20 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  icon: { width: 70, height: 70, margin: 10 },
  label: { textAlign: "center", color: "#fff" },
});
