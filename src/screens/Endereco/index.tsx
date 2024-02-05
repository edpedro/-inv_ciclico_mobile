import { Box, FlatList, Heading } from "native-base";
import FlatListEnderecoCiclico from "../../components/FlatListEnderecoCiclico";
import { inventoryContext } from "../../contexts/hooks/Inventory";
import { useEffect } from "react";
import { AddressData } from "../../contexts/types";
import { useLoading } from "../../contexts/hooks/Loading";
import Spinner from "../../components/Spinner";
import FlatListEnderecoGeral from "../../components/FlatListEnderecoGeral";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackParamList = {
  Endereco: {
    id: string;
    type: string;
  };
};

type EnderecoScreenRouteProp = RouteProp<StackParamList, "Endereco">;

type EnderecoScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Endereco"
>;

type Props = {
  route: EnderecoScreenRouteProp;
  navigation: EnderecoScreenNavigationProp;
};

export default function Endereco({ route, navigation }: Props) {
  const {
    ListAddressInventoryData,
    addressData,
    ListOneAddressData,
    findOneAddressData,
    updateDataTrue,
    setUpdateDataTrue,
    ListCiclicoInventoryData,
  } = inventoryContext();

  const { isLoadingFetch } = useLoading();

  const { id, type } = route.params;

  useEffect(() => {
    if (type !== "geral") {
      ListCiclicoInventoryData(id);
    } else {
      ListCiclicoInventoryData(id);
      ListAddressInventoryData(id);
    }
    ListOneAddressData(id);
    setUpdateDataTrue(false);
  }, [id, updateDataTrue, type]);

  return (
    <Box flex={1} flexDirection="column" bg="white">
      {isLoadingFetch ? (
        <Spinner />
      ) : (
        <>
          <Heading p="4" pb="3" size="xl">
            {findOneAddressData && findOneAddressData.name}
          </Heading>

          {addressData && addressData.length > 0 ? (
            type === "geral" ? (
              <FlatListEnderecoGeral />
            ) : (
              <FlatList
                data={addressData}
                renderItem={({ item }) => {
                  return <FlatListEnderecoCiclico data={item} />;
                }}
                keyExtractor={(address: AddressData) => address.id}
              />
            )
          ) : null}
        </>
      )}
    </Box>
  );
}
