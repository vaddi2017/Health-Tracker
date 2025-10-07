import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Gradient from "../src/components/Gradient";
import PrimaryButton from "../src/components/PrimaryButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <Gradient>
      <View style={styles.container}>
        <Text style={styles.logo}>O2</Text>
        <Text style={styles.title}>You are Limitless</Text>
        <Text style={styles.subtitle}>Welcome Back</Text>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("PatientLogin")}
        >
          <Text style={styles.optionText}>Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("ParentLogin")}
        >
          <Text style={styles.optionText}>Family</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("PhysicianLogin")}
        >
          <Text style={styles.optionText}>Physician</Text>
        </TouchableOpacity>

        <PrimaryButton
          title="Log In"
          onPress={() => navigation.navigate("PatientLogin")}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don’t Have an Account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccount")}
          >
            <Text style={styles.link}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  logo: { color: "#fff", fontSize: 28, marginBottom: 8 },
  title: { color: "#fff", fontSize: 24, fontWeight: "700" },
  subtitle: { color: "#fff", opacity: 0.9, marginBottom: 16 },
  option: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginBottom: 12,
  },
  optionText: { color: "#fff", fontSize: 16 },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 14 },
  footerText: { color: "white" },
  link: { color: "white", textDecorationLine: "underline" },
});
