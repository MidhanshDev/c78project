import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from "./screens/SignUpLoginScreen";

export default function App() {
  return (
    <View>
      <SignUpLoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
