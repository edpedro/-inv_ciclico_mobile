import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "../../themes";
import { MaterialIcons } from "@expo/vector-icons";

const user = require("../../assets/user.png");

import { InventoryData } from "../../contexts/types";

export default function FlatListInventario({ data }: { data: InventoryData }) {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.content}
          onPress={() => {
            navigation.navigate("Endereco", { id: data.id });
          }}
          activeOpacity={0.8}
        >
          <View style={styles.line} />
          <View style={styles.contentBody}>
            <View style={styles.iniciarBody}>
              <Text style={styles.iniciarTitle}>INICAR INVENTARIO AGORA</Text>
              <View style={styles.dateBody}>
                <MaterialIcons name="update" size={24} color="black" />
                <Text style={styles.iniciarDate}>{data.date}</Text>
              </View>
            </View>
            <View style={styles.bodyLine} />
            <View style={styles.nameBody}>
              <Image source={user} style={styles.imageProfile} />
              <View>
                <Text style={styles.nameTitle}>{data.name}</Text>
                <Text style={styles.nameUser}>{data.user.name} - Criador</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 8,
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
