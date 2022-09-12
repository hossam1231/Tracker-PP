import { Entypo, AntDesign } from "@expo/vector-icons";
import {
  IconButton,
  Icon,
  Button,
  VStack,
  Text,
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  Link,
  HStack,
  Spinner,
} from "native-base";
import React from "react";
import ActivityCell from "../../cells/ActivityCell";

let size = "lg";

export default function ProfileScreen() {
  return (
    <Box flex="1" bg="#fafaff">
      <Center w="100%">
        <Box safeArea p={"2"} py="8" w="90%" maxW={"500"}>
          <VStack space={5}>
            <HStack alignItems="center" justifyContent={"space-between"}>
              <Text fontFamily="Manrope-ExtraBold" fontSize="4xl">
                Task
              </Text>
              <IconButton
                size={size}
                _icon={{
                  as: AntDesign,
                  color: "black",
                  name: "ellipsis1",
                }}
              />
            </HStack>
            <Box rounded={"lg"} p="5" h="100" w="100%" bg="black">
              <HStack
                w="100%"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <VStack space={3}>
                  <Text
                    color="white"
                    fontSize={"xl"}
                    fontFamily="Manrope-ExtraBold"
                  >
                    44:55:22
                  </Text>
                  <HStack alignItems="center" space={2}>
                    <Spinner color="white" />
                    <Text
                      color="white"
                      fontFamily="Manrope-Light"
                      fontSize={"sm"}
                    >
                      ranison project
                    </Text>
                  </HStack>
                </VStack>
                <Box>
                  <IconButton
                    size={size}
                    _icon={{
                      color: "white",
                      as: Entypo,
                      name: "chevron-right",
                    }}
                  />
                </Box>
              </HStack>
            </Box>
            <HStack
              w="100%"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text fontSize="4xl" fontFamily="Manrope-ExtraBold">
                Today
              </Text>

              <Text fontSize="md" fontFamily="Manrope-Bold">
                See all
              </Text>
            </HStack>
            <ActivityCell />
          </VStack>
        </Box>
      </Center>
      <Box
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bottom="0px"
        borderTopRadius={"30px"}
        h="90"
        w="100%"
        bg="white"
      >
        <HStack w="100%" justifyContent={"space-evenly"}>
          <IconButton
            size={size}
            _icon={{
              as: AntDesign,
              color: "black",
              name: "clockcircle",
            }}
          />
          <IconButton
            size={size}
            _icon={{
              as: AntDesign,
              color: "#999999",
              name: "plus",
              size: "2xl",
            }}
          />
          <IconButton
            size={size}
            _icon={{
              as: Entypo,
              color: "#999999",
              name: "pie-chart",
            }}
          />
        </HStack>
      </Box>
    </Box>
  );
}
