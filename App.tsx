import { React, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import "./config/firebase";
import RootNavigation from "./navigation";
import {
  NativeBaseProvider,
  Heading,
  HStack,
  Center,
  Spinner,
} from "native-base";
import useCachedResources from "./hooks/useCachedResources";

function LoadingScreen() {
  return (
    <Center flex="1">
      <Spin />
    </Center>
  );
}

const Spin = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="black" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};

export default function Application() {
  return <App />;
}

function App() {
  let isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <NativeBaseProvider>
        <LoadingScreen />
      </NativeBaseProvider>
    );
  } else {
    return (
      <ThemeProvider>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <RootNavigation />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </ThemeProvider>
    );
  }
}
