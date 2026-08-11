import { StyleSheet, Text, View } from "react-native";

export default function RecipeScreen() {
  return (
    <View style={styles.container}>
      <Text>Recipe Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
