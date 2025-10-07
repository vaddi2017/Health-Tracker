import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Gradient from "../../src/components/Gradient";
import BottomNav from "../../src/components/BottomNav";

export default function SofaProgressScreen({ navigation }) {
  const circles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <Gradient>
      <View style={styles.container}>
        <Text style={styles.header}>Sofa Progress</Text>
        <View style={styles.grid}>
          {circles.map((c) => (
            <View key={c} style={styles.circle} />
          ))}
        </View>
      </View>
      <BottomNav onHome={() => navigation.navigate("PhysicianHome")} />
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  header: { fontSize: 22, color: "#fff", fontWeight: "700", marginBottom: 20 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.3)",
    margin: 8,
  },
});
