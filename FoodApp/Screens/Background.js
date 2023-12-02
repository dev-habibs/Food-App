import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const FoodAppBackground = () => {
  return (
    <LinearGradient
      // The array of colors for the gradient
      colors={['#FFD700', '#FFA500']}
      // The direction of the gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Your UI elements go here */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FoodAppBackground;
