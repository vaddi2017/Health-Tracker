import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Gradient from "../../src/components/Gradient";
import BottomNav from "../../src/components/BottomNav";

const patients = ["Dr. Rose", "Nurse Rob", "Dr. Amir", "Dr. Jack"];

export default function PatientListScreen({ navigation }) {
  return (
    <Gradient>
      <View style={styles.container}>
        <Text style={styles.header}>Patients</Text>
        {patients.map((p, i) => (
          <TouchableOpacity
            key={i}
            style={styles.item}
            onPress={() => navigation.navigate("SofaProgress")}
          >
            <Text style={styles.text}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <BottomNav onHome={() => navigation.navigate("PhysicianHome")} />
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  header: { fontSize: 22, color: "#fff", fontWeight: "700", marginBottom: 20 },
  item: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
  },
  text: { color: "#fff", fontSize: 16 },
});
