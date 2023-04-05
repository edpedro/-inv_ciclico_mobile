import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import FlatListItem from "../../components/FlatListItem";
import Header from "../../components/Header";
import { Theme } from "../../themes";
import { inventoryContext } from "../../contexts/hooks/Inventory";
import { useEffect } from "react";
import { ItemData } from "../../contexts/types";
import FlatListItemNew from "../../components/FlatListItemNew";

interface RouteParams {
  id: string;
  endereco: string;
}

export default function Item() {
  const { enderecoItemData, ListItemEnderecoData, updateDataTrue } =
    inventoryContext();

  const navigation = useNavigation();

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>{endereco}</Text>
      </View>

      {enderecoItemData && enderecoItemData.length > 0 ? (
        <FlatList
          data={enderecoItemData.filter((item) => !item.status)}
          renderItem={({ item }) => <FlatListItemNew data={item} />}
          keyExtractor={(address: ItemData) => address.id}
        />
      ) : (
        <View style={styles.feedback}>
          <Text>Inventario sem endereços</Text>
        </View>
      )}
      {enderecoItemData &&
        enderecoItemData.every((item) => item.status === true) && (
          <View style={styles.feedback}>
            <Text>Todos itens contados</Text>
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
    fontSize: 32,
    fontFamily: "Roboto_500Medium",
  },
  feedback: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
});
