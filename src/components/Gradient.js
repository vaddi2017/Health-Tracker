import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Gradient({ children }) {
  return (
    <LinearGradient
      colors={['#f8a6ff', '#c8a5ff', '#a7d5ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
}
