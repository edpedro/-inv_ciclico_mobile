import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Heading,
  VStack,
  Text,
  Spacer,
} from "native-base";
import Header from "../../components/Header";
import FlatListInventario from "../../components/FlatListInventario";
import { inventoryContext } from "../../contexts/hooks/Inventory";

export default function Home() {
  const { inventoryData, loadListInventoryData } = inventoryContext();
  return (
    <Box flex={1} h="full" w="100%" flexDirection="column" bg="white">
      <Header />
      <Heading p="4" pb="3" size="xl">
        Inventarios
      </Heading>
      <FlatList
        data={inventoryData && inventoryData}
        renderItem={({ item }) => <FlatListInventario data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}
