import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Gradient from "../src/components/Gradient";
import TextField from "../src/components/TextField";
import PrimaryButton from "../src/components/PrimaryButton";
import { AntDesign } from "@expo/vector-icons";

export default function PatientLoginScreen() {
  return (
    <Gradient>
      <View style={styles.container}>
        <Text style={styles.logo}>O2</Text>
        <Text style={styles.title}>You are Limitless</Text>
        <Text style={styles.subtitle}>Patient Login</Text>

        <TextField placeholder="First and Last Name" />
        <TextField placeholder="Password" secureTextEntry />
        <TextField placeholder="Date of Birth (MM/DD/YY)" />

        <PrimaryButton title="Log In" onPress={() => {}} />

        <TouchableOpacity style={styles.google}>
          <AntDesign name="google" size={18} color="#fff" />
          <Text style={styles.googleText}> GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  logo: { color: "#fff", fontSize: 28, marginBottom: 8 },
  title: { color: "#fff", fontSize: 24, fontWeight: "700" },
  subtitle: { color: "#fff", opacity: 0.9, marginBottom: 16 },
  google: { alignSelf: "center", flexDirection: "row", marginTop: 20 },
  googleText: { color: "#fff", fontWeight: "600" },
});
