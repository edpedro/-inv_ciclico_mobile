import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { Theme } from "../../themes";
import { MaterialIcons } from "@expo/vector-icons";

export default function Acount() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Header />
      </View>
      <View>
        <TouchableOpacity style={styles.exit}>
          <MaterialIcons
            name="exit-to-app"
            size={100}
            color={Theme.colors.green}
          />
          <Text style={styles.exitTitle}>Sair</Text>
        </TouchableOpacity>
      </View>
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
  exit: {
    marginTop: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  exitTitle: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
});
