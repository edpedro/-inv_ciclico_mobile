import { View, Text, StyleSheet, Image } from "react-native";
import { Theme } from "../../themes";
import { FontAwesome } from "@expo/vector-icons";
const profile = require("../../assets/profile.png");

export default function FlatListItem() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentBody}>
          <View style={styles.enderecoBody}>
            <Text style={styles.enderecoTitle}>Código</Text>
            <View style={styles.dateBody}>
              <FontAwesome name="check" size={24} color={Theme.colors.green} />
            </View>
          </View>
          <View>
            <View style={styles.enderecoIcon}>
              <Text style={styles.nameTitle}>0192-0450-0</Text>
              <Text style={styles.nameDescri}>
                OTTERBOX COMMUTER GALAXY S5 BCO/CNZA PLC
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentBody: {
    width: "95%",
    height: 80,
    paddingHorizontal: 10,
    borderRadius: 10,

    backgroundColor: Theme.colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  enderecoBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  enderecoTitle: {
    fontSize: 20,
    fontFamily: "Roboto_400Regular",
    color: Theme.colors.secondaryText,
  },
  dateBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  enderecoDate: {
    fontSize: 12,
    fontFamily: "Roboto_500Medium",
    marginLeft: 10,
  },
  enderecoIcon: {
    flexDirection: "column",
  },
  nameTitle: {
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
  },
  nameDescri: {
    fontSize: 12,
    fontFamily: "Roboto_300Light",
  },
});
