import { Box, FlatList, Heading } from "native-base";
import FlatListEndereco from "../../components/FlatListEndereco";
import Header from "../../components/Header";
import { useRoute } from "@react-navigation/native";
import { inventoryContext } from "../../contexts/hooks/Inventory";
import { useEffect } from "react";
import { AddressData } from "../../contexts/types";
import { useLoading } from "../../contexts/hooks/Loading";
import Spinner from "../../components/Spinner";

interface RouteParams {
  id: string;
}

export default function Endereco() {
  const {
    ListAddressInventoryData,
    addressData,
    ListOneAddressData,
    findOneAddressData,
    updateDataTrue,
  } = inventoryContext();

  const { isLoadingFetch } = useLoading();

  const route = useRoute();

  const { id } = route.params as RouteParams;

  useEffect(() => {
    const handleListAddres = async () => {
      ListAddressInventoryData(id);
      ListOneAddressData(id);
    };
    handleListAddres();
  }, [id, updateDataTrue]);

  return (
    <Box flex={1} h="full" w="100%" flexDirection="column" bg="white">
      <Header />

      {isLoadingFetch ? (
        <Spinner />
      ) : (
        <>
          <Heading p="4" pb="3" size="xl">
            {findOneAddressData && findOneAddressData.name}
          </Heading>

          {addressData && addressData.length > 0 ? (
            <FlatList
              data={addressData.filter((item) => !item.status)}
              renderItem={({ item }) => <FlatListEndereco data={item} />}
              keyExtractor={(address: AddressData) => address.id}
            />
          ) : null}
        </>
      )}
    </Box>
  );
}
