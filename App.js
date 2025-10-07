import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 🔹 Main Screens
import WelcomeScreen from "./screens/WelcomeScreen";
import PatientLoginScreen from "./screens/PatientLoginScreen";
import ParentLoginScreen from "./screens/ParentLoginScreen";
import PhysicianLoginScreen from "./screens/PhysicianLoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import MiniMeCreateScreen from "./screens/MiniMeCreateScreen";

// 🔹 Physician Space Screens
import PhysicianHomeScreen from "./screens/PhysicianSpace/PhysicianHomeScreen";
import SofaOverviewScreen from "./screens/PhysicianSpace/SofaOverviewScreen";
import SofaNotesScreen from "./screens/PhysicianSpace/SofaNotesScreen";
import PatientListScreen from "./screens/PhysicianSpace/PatientListScreen";
import SofaProgressScreen from "./screens/PhysicianSpace/SofaProgressScreen";

// Create Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "#fff",
        }}
      >
        {/* ───────────────────────────────
            👋 Onboarding + Login Flow
        ─────────────────────────────── */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="PatientLogin" component={PatientLoginScreen} />
        <Stack.Screen name="ParentLogin" component={ParentLoginScreen} />
        <Stack.Screen name="PhysicianLogin" component={PhysicianLoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="MiniMeCreate" component={MiniMeCreateScreen} />

        {/* ───────────────────────────────
            🩺 Physician Flow (Dashboard)
        ─────────────────────────────── */}
        <Stack.Screen name="PhysicianHome" component={PhysicianHomeScreen} />
        <Stack.Screen name="SofaOverview" component={SofaOverviewScreen} />
        <Stack.Screen name="SofaNotes" component={SofaNotesScreen} />
        <Stack.Screen name="PatientList" component={PatientListScreen} />
        <Stack.Screen name="SofaProgress" component={SofaProgressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

