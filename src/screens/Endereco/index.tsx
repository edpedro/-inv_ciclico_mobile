import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import FlatListEndereco from "../../components/FlatListEndereco";
import Header from "../../components/Header";
import { Theme } from "../../themes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { inventoryContext } from "../../contexts/hooks/Inventory";
import { useEffect } from "react";
import { AddressData } from "../../contexts/types";

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
    loadListInventoryData,
  } = inventoryContext();

  const navigation = useNavigation();

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>
          {findOneAddressData && findOneAddressData.name}
        </Text>
      </View>

      {addressData && addressData.length > 0 ? (
        <FlatList
          data={addressData.filter((item) => !item.status)}
          renderItem={({ item }) => <FlatListEndereco data={item} />}
          keyExtractor={(address: AddressData) => address.id}
        />
      ) : (
        <View style={styles.feedback}>
          <Text>Inventario sem endereços</Text>
        </View>
      )}
      {addressData && addressData.every((item) => item.status === true) && (
        <View style={styles.feedback}>
          <Text>Todos enderecos contados</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 30,
  },
  content: {
    marginTop: 30,
  },
  contentTitle: {
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
  },
  feedback: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
});
