import { View, Text, StyleSheet, Image } from "react-native";
import { Theme } from "../../themes";
import { MaterialIcons } from "@expo/vector-icons";
const user = require("../../assets/user.png");

export default function FlatListInventario() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.line} />
        <View style={styles.contentBody}>
          <View style={styles.iniciarBody}>
            <Text style={styles.iniciarTitle}>INICAR INVENTARIO AGORA</Text>
            <View style={styles.dateBody}>
              <MaterialIcons name="update" size={24} color="black" />
              <Text style={styles.iniciarDate}>Março 20/03/2023</Text>
            </View>
          </View>
          <View style={styles.bodyLine} />
          <View style={styles.nameBody}>
            <Image source={user} style={styles.imageProfile} />
            <View>
              <Text style={styles.nameTitle}>
                Inventario_ciclico_movel-20.03.2023
              </Text>
              <Text style={styles.nameUser}>Eduardo - Criador</Text>
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
    height: 118,
    backgroundColor: Theme.colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  contentBody: {
    width: "95%",
    height: 150,
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
  iniciarBody: {
    flexDirection: "column",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  iniciarTitle: {
    fontSize: 12,
    fontFamily: "Roboto_100Thin",
    marginBottom: 5,
  },
  dateBody: {
    flexDirection: "row",
    alignItems: "center",
  },
  iniciarDate: {
    fontSize: 12,
    fontFamily: "Roboto_500Medium",
    marginLeft: 10,
  },
  bodyLine: {
    width: 303,
    height: 1,
    backgroundColor: Theme.colors.primarySeg,
    marginTop: 10,
    marginBottom: 10,
  },
  nameBody: {
    flexDirection: "row",
  },
  imageProfile: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  nameTitle: {
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
  },
  nameUser: {
    fontSize: 12,
    fontFamily: "Roboto_300Light",
    marginTop: 5,
  },
});
