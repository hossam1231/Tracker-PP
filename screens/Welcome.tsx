import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  NativeBaseProvider,
  Button,
  HStack,
  VStack,
  PresenceTransition,
  Heading,
  Icon,
  Fab,
  Text,
  Center,
  Box,
  View,
} from "native-base";
import { Entypo } from "@expo/vector-icons";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Sign In")
    }, 7000);
  }, [])


  return (
    <NativeBaseProvider>
      <Center h="100vh">
        <Box>
          <PresenceTransition
            visible={isOpen}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 5500,
              },
            }}
          >
            <VStack space={4}>
              '
              <HStack>
                <Text fontSize="6xl" fontFamily="Manrope-ExtraLight">
                  Count
                </Text>
                <Text fontSize="md" fontFamily="Manrope-ExtraBold">
                  Ability
                </Text>
              </HStack>
              <Text bold fontFamily="Manrope-ExtraBold">
                REMEMBER WHAT MAKES YOU TICK{" "}
              </Text>
            </VStack>
          </PresenceTransition>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default WelcomeScreen;
