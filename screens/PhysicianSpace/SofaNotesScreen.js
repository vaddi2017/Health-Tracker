import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Gradient from "../../src/components/Gradient";
import BottomNav from "../../src/components/BottomNav";

export default function SofaNotesScreen({ navigation }) {
  return (
    <Gradient>
      <View style={styles.container}>
        <Text style={styles.header}>Sofa Notes</Text>
        <TextInput
          multiline
          placeholder="Enter today's notes..."
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />
      </View>
      <BottomNav onHome={() => navigation.navigate("PhysicianHome")} />
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30 },
  header: { fontSize: 22, color: "#fff", fontWeight: "700", marginBottom: 20 },
  input: {
    flex: 1,
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.1)",
    textAlignVertical: "top",
  },
});
