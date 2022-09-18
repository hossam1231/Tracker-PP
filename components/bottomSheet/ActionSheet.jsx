import React, { useState } from "react";
import { View, Text, Dimensions, Animated, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "./Card";

const { width, height } = Dimensions.get("screen");

const ActionSheet = (props) => {
  const [alignment] = useState(new Animated.Value(0));

  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const hideTheActionSheet = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  const actionSheetIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 2.4 + 50, 0],
  });

  const actionSheetStyle = {
    bottom: actionSheetIntropolate,
  };

  const gestureHandler = (e) => {
    if (e.nativeEvent.contentoffset.y > 0) bringUpActionSheet();
    //  this is interesting this is cool implementation
    else if (e.nativeEvent.contentOffset.y < 0) hideTheActionSheet();
  };

  return (
    <Animated.View style={[styles.container, actionSheetStyle]}>
      <ScrollView
        onScroll={(e) => gestureHandler(e)}
        style={styles.grabber}
      ></ScrollView>
      <Text> Hello This is Action Sheet </Text>
      <View>
        {props.actionSheetButtons
          ? props.actionSheetButtons.map((button) => (
              <Card
                title={button.title}
                description={button.description}
                onPress={button.onPress}
              />
            ))
          : null}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2.4,
    width: width / 1.05,
    borderTopRightRadius: 40,
    marginHorizontal: 10,
  },
  grabber: {
    marginTop: 10,
    alignSelf: "center",
    width: 60,
    borderTopWidth: 5,
    borderRadius: 5,
    borderTopColor: "#aaa",
  },
});

export default ActionSheet;
