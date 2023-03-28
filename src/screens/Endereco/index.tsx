import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import FlatListEndereco from "../../components/FlatListEndereco";
import FlatListInventario from "../../components/FlatListInventario";
import Header from "../../components/Header";
import { Theme } from "../../themes";

export default function Endereco() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Inventario_ciclico 20.03.2022</Text>
      </View>
      <FlatListEndereco />
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
});
