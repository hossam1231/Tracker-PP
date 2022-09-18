import React from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import ActionSheet from "./ActionSheet";

const { width, height } = Dimensions.get("screen");

const App = () => {
  const buttons = [
    {
      title: "Call User",
      description: "Call +923456765456",
      onPress: () => Alert.alert(`Calling User ...`),
    },
    {
      title: "Send a Message",
      description: "Text | +923456765456",
      onPress: () => Alert.alert(`Calling User ...`),
    },
    {
      title: "Call User",
      description: "Call +923456765456",
      onPress: () => Alert.alert(`Calling User ...`),
    },
    {
      title: "Call User",
      description: " Call +923456765456",
      onPress: () => Alert.alert(` Calling User ...`),
    },
  ];

  return (
    <View style={{ width, height }}>
      <View style={styles.container}>
        <Text>Hello And Welcome !</Text>
      </View>
      <ActionSheet actionSheetButtons={buttons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
