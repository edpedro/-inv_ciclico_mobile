import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import FlatListInventario from "../../components/FlatListInventario";
import Header from "../../components/Header";
import { Theme } from "../../themes";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Inventarios</Text>
      </View>
      <FlatListInventario />
      <FlatListInventario />
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
    fontSize: 26,
    fontFamily: "Roboto_500Medium",
  },
});
