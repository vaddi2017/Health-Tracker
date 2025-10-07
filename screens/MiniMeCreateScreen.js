import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Gradient from "../src/components/Gradient";
import TextField from "../src/components/TextField";
import PrimaryButton from "../src/components/PrimaryButton";

export default function MiniMeCreateScreen() {
  return (
    <Gradient>
      <View style={styles.container}>
        <Text style={styles.logo}>O2</Text>
        <Text style={styles.title}>You are Limitless</Text>
        <Text style={styles.subtitle}>mini me</Text>

        <TextField placeholder="First and Last" />
        <TextField placeholder="Date of Birth (MM/DD/YY)" />
        <TextField placeholder="Unit (Select)" />
        <TextField placeholder="Password" secureTextEntry />
        <TextField placeholder="Repeat Password" secureTextEntry />

        <PrimaryButton title="Create" onPress={() => {}} />
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  logo: { color: "#fff", fontSize: 28, marginBottom: 8 },
  title: { color: "#fff", fontSize: 24, fontWeight: "700" },
  subtitle: { color: "#fff", opacity: 0.9, marginBottom: 16 },
});
