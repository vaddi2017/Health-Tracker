import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Gradient from "../../src/components/Gradient";
import BottomNav from "../../src/components/BottomNav";

export default function SofaOverviewScreen({ navigation }) {
  return (
    <Gradient>
      <View style={styles.container}>
        <Text style={styles.header}>Sofa</Text>
        <View style={styles.card}>
          <Text style={styles.text}>Assigned Patients: 0</Text>
        </View>
      </View>
      <BottomNav onHome={() => navigation.navigate("PhysicianHome")} />
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  header: { fontSize: 22, color: "#fff", fontWeight: "700", marginBottom: 20 },
  card: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "#fff", fontSize: 16 },
});
