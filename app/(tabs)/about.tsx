import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About StickerSmash</Text>
        <Text style={styles.text}>
          StickerSmash is a fun and interactive app that allows you to create custom stickers using your photos and emojis.
        </Text>
        <Text style={styles.subtitle}>Features:</Text>
        <Text style={styles.text}>
          • Choose photos from your device or use the default image
        </Text>
        <Text style={styles.text}>
          • Add emoji stickers to your photos
        </Text>
        <Text style={styles.text}>
          • Resize and move stickers freely
        </Text>
        <Text style={styles.text}>
          • Save your creations to your device
        </Text>
        <Text style={styles.subtitle}>How to use:</Text>
        <Text style={styles.text}>
          1. Select a photo or use the default image
        </Text>
        <Text style={styles.text}>
          2. Add emoji stickers by tapping the "+" button
        </Text>
        <Text style={styles.text}>
          3. Adjust stickers by dragging or double-tapping
        </Text>
        <Text style={styles.text}>
          4. Save your creation using the save button
        </Text>
        <Text style={styles.text}>
          5. Share your stickers with friends and have fun!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
  },
  content: {
    padding: 20,
  },
  title: {
    color: "#ffd33d",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    color: "#ffd33d",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
});

