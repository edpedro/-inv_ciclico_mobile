import { useRoute } from "@react-navigation/native";
import { Box, FlatList, Heading } from "native-base";
import FlatListItem from "../../components/FlatListItem";
import Header from "../../components/Header";

import { inventoryContext } from "../../contexts/hooks/Inventory";
import { useEffect } from "react";
import { useLoading } from "../../contexts/hooks/Loading";
import Spinner from "../../components/Spinner";

interface RouteParams {
  id: string;
  endereco: string;
}

export default function Item() {
  const { enderecoItemData, ListItemEnderecoData, updateDataTrue } =
    inventoryContext();

  const { isLoadingFetch } = useLoading();

  const route = useRoute();

  const { id, endereco } = route.params as RouteParams;

  useEffect(() => {
    const handleListItem = async () => {
      if (endereco && id) {
        ListItemEnderecoData(id, endereco);
      }
    };
    handleListItem();
  }, [endereco, id, updateDataTrue]);

  return (
    <Box flex={1} h="full" w="100%" flexDirection="column" bg="white">
      <Header />

      {isLoadingFetch ? (
        <Spinner />
      ) : (
        <>
          <Heading p="4" pb="3" size="xl">
            {endereco}
          </Heading>

          {enderecoItemData && enderecoItemData.length > 0 ? (
            <FlatList
              data={
                enderecoItemData &&
                enderecoItemData.filter((item) => !item.status)
              }
              renderItem={({ item }) => <FlatListItem data={item} />}
              keyExtractor={(item) => item.id}
            />
          ) : null}
        </>
      )}
    </Box>
  );
}
