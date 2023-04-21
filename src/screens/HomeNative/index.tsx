import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import FlatListInventario from "../../components/FlatListInventario";
import Header from "../../components/Header";
import { Theme } from "../../themes";
import { InventoryData } from "../../contexts/types";

import { inventoryContext } from "../../contexts/hooks/Inventory";
import { useEffect, useState } from "react";

export default function HomeNative() {
  const { inventoryData, loadListInventoryData } = inventoryContext();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const handleLoadList = async () => {
      await loadListInventoryData();
      setRefreshing(false);
    };
    handleLoadList();
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Inventarios</Text>
      </View>
      {inventoryData && inventoryData.length > 0 ? (
        <FlatList
          data={inventoryData.filter((item) => !item.status)}
          renderItem={({ item }) => <FlatListInventario data={item} />}
          keyExtractor={(inventory: InventoryData) => inventory.id}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
          }}
        />
      ) : null}
      {inventoryData && inventoryData.every((item) => item.status) && (
        <View style={styles.feedback}>
          <Text>Bem vindo</Text>
          <Text>No momento não tem inventario</Text>
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
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 26,
    fontFamily: "Roboto_500Medium",
  },
  feedback: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
});
