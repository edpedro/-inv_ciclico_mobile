import { Box, HStack, Heading, VStack, Text, Pressable } from "native-base";

import { ItemData } from "../../contexts/types";
import { useNavigation } from "@react-navigation/native";

export default function FlatListItem({ data }: { data: ItemData }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Input", {
      idItem: data.id,
      idName: data.baseNameInventario_id,
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
              <Box w="95%" h={100} bg="white" rounded="md" shadow="3">
                <VStack
                  space={1}
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Heading
                    size="sm"
                    fontWeight="200"
                    color="black"
                    ml="4"
                    mt="2"
                  >
                    Código
                  </Heading>
                </VStack>
                <HStack ml={4}>
                  <VStack justifyContent="space-between">
                    <Text fontSize="2xl" bold>
                      {data.item}
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                      {data.descricao}
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
