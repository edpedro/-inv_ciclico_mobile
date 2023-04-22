import {
  Box,
  HStack,
  Heading,
  VStack,
  Divider,
  Text,
  Pressable,
} from "native-base";

import { AddressData } from "../../contexts/types";
import { useNavigation } from "@react-navigation/native";

export default function FlatListEndereco({ data }: { data: AddressData }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Item", {
      endereco: data.endereco,
      id: data.baseNameInventario_id,
    });
  };

  return (
    <Pressable onPress={handlePress}>
      {({ isPressed }) => (
        <>
          <Box
            _dark={{
              borderColor: "muted.50",
            }}
            borderColor="muted.800"
            pl={["0", "4"]}
            pr={["0", "5"]}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            <HStack w="100%" padding={4}>
              <Divider
                bg="green.500"
                thickness="6"
                h="100"
                orientation="vertical"
              />
              <Box w="95%" h={100} bg="white" rounded="md" shadow="3">
                <VStack
                  space={1}
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Heading
                    size="lg"
                    fontWeight="300"
                    color="gray.500"
                    ml="4"
                    mt="2"
                    bold
                  >
                    ENDEREÇO
                  </Heading>
                  <Heading
                    size="sm"
                    fontWeight="300"
                    color="gray.700"
                    mt="3"
                    mr="5"
                  >
                    SKU -{" "}
                    <Text fontSize="xs" bold>
                      {data.item}
                    </Text>
                  </Heading>
                </VStack>
                <Divider
                  _light={{
                    bg: "gray.100",
                  }}
                />
                <HStack ml={4}>
                  <VStack justifyContent="space-between">
                    <Text fontSize="3xl" bold>
                      {data.endereco}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </>
      )}
    </Pressable>
  );
}
