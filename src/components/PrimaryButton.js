import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
    marginTop: 12,
  },
  txt: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
