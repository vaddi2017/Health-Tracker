import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Gradient from "../../src/components/Gradient";
import PrimaryButton from "../../src/components/PrimaryButton";

export default function PhysicianHomeScreen({ navigation }) {
  return (
    <Gradient>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/abstract-flowing-wave-design-background_1048-16119.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.subtitle}>We appreciate you.</Text>

        <PrimaryButton
          title="View Sofa Assignments"
          onPress={() => navigation.navigate("SofaOverview")}
        />
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 200, height: 200, borderRadius: 100, marginBottom: 30 },
  welcome: { color: "#fff", fontSize: 28, fontWeight: "700" },
  subtitle: { color: "#fff", fontSize: 18, marginBottom: 40 },
});
