import React from "react";
import {
  Box,
  Text,
  Center,
  Heading,
  VStack,
  IconButton,
  HStack,
  Badge,
  Spinner,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const TrackerPlayScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  let size = "lg";

  /* <Text>{JSON.stringify(route.params.tracker)}</Text> */

  return (
    <Box flex="1">
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          variant="filled"
          onPress={() => navigation.goBack()}
          size={size}
          _icon={{
            as: AntDesign,
            name: "back",
            color: "#999999",
          }}
        />
        <Text>Rasion Project</Text>
        <Badge>Work</Badge>
      </HStack>

      <Center flex="1">
        <VStack space={5}>
          <HStack alignItems="center" space={2}>
            <Text>Raison project</Text>
            <Spinner />
          </HStack>

          <Heading>23:55:22</Heading>

          <HStack alignItems="center" justifyContent="center" space={5}>
            <IconButton
              variant={"filled"}
              size={size}
              _icon={{
                as: AntDesign,
                name: "pause",
                color: "#999999",
              }}
            />
            <IconButton
              variant={"filled"}
              size={size}
              _icon={{
                as: Entypo,
                name: "controller-stop",
                color: "#999999",
              }}
            />
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default TrackerPlayScreen;
