// example-card.js
// A plain-JavaScript React Native component (no TypeScript).
// Copy this file's structure whenever you make a new component.

import { View, Text, StyleSheet } from 'react-native';

// A component is just a function that returns JSX.
// `props` is a plain object of whatever you pass in from the parent.
export default function ExampleCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.body}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#E6F4FE',
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0A2540',
  },
  body: {
    fontSize: 14,
    color: '#33475B',
  },
});
