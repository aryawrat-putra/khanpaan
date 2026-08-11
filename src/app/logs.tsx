import { StyleSheet, Text, View } from "react-native";

export default function HistoryLogsScreen() {
  return (
    <View style={styles.container}>
      <Text>History Logs Page</Text>
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
