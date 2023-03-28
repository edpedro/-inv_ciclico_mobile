import { View, Text, StyleSheet, Image } from "react-native";
import { Theme } from "../../themes";
import { FontAwesome } from "@expo/vector-icons";
const profile = require("../../assets/profile.png");

export default function FlatListEndereco() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.line} />
        <View style={styles.contentBody}>
          <View style={styles.enderecoBody}>
            <Text style={styles.enderecoTitle}>ENDEREÇO</Text>
            <View style={styles.dateBody}>
              <Text style={styles.enderecoDate}>Total SKU - 10</Text>
            </View>
          </View>
          <View style={styles.bodyLine} />
          <View>
            <View style={styles.enderecoIcon}>
              <Text style={styles.nameTitle}>D.29.3</Text>
              <FontAwesome name="check" size={24} color={Theme.colors.green} />
              {/* <FontAwesome
                name="close"
                size={24}
                color={Theme.colors.corIcon}
              /> */}
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
  line: {
    width: 4,
    height: 84,
    backgroundColor: Theme.colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  contentBody: {
    width: "95%",
    height: 107,
    paddingHorizontal: 10,

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
    marginTop: 10,
    paddingHorizontal: 10,
  },
  enderecoTitle: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    marginBottom: 5,
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
  bodyLine: {
    width: 303,
    height: 1,
    backgroundColor: Theme.colors.primarySeg,
  },
  enderecoIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  imageProfile: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  nameTitle: {
    fontSize: 40,
    fontFamily: "Roboto_500Medium",
  },
});
