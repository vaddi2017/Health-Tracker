import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function TextField(props) {
  return (
    <TextInput
      placeholderTextColor="rgba(255,255,255,0.7)"
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(255,255,255,0.12)',
    color: '#fff',
  },
});
