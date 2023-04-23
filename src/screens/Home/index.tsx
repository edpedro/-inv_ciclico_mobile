import { Box, FlatList, Spinner, Heading, Text } from "native-base";
import Header from "../../components/Header";
import FlatListInventario from "../../components/FlatListInventario";
import { inventoryContext } from "../../contexts/hooks/Inventory";
import { useLoading } from "../../contexts/hooks/Loading";

export default function Home() {
  const { inventoryData } = inventoryContext();

  const { isLoadingFetch } = useLoading();

  return (
    <Box flex={1} h="full" w="100%" flexDirection="column" bg="white">
      <Header />
      <Heading p="4" pb="3" size="xl">
        Inventarios
      </Heading>
      {isLoadingFetch ? (
        <Spinner />
      ) : (
        <>
          {inventoryData && inventoryData.length > 0 ? (
            <FlatList
              data={inventoryData && inventoryData}
              renderItem={({ item }) => <FlatListInventario data={item} />}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <Box alignItems="center" mt="20">
              <Text>No momento sem inventário</Text>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
