import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import FlatListEndereco from "../../components/FlatListEndereco";
import FlatListInventario from "../../components/FlatListInventario";
import FlatListItem from "../../components/FlatListItem";
import Header from "../../components/Header";
import { Theme } from "../../themes";

export default function Item() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>D.29.32</Text>
      </View>
      <FlatListItem />
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
});
