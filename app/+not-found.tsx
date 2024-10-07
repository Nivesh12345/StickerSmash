import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { Stack ,Link } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{title: "Oops! Not Found"}}/>
      <View style={styles.container}>
        <Text style={styles.text}>404: Page Not Found</Text>
        <Link href="/" style={styles.button}>Go to Home</Link>
      </View>
    </>
  );
}     


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

