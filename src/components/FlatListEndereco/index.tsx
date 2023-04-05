import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../../themes";
import { FontAwesome } from "@expo/vector-icons";

import { AddressData } from "../../contexts/types";
import { useNavigation } from "@react-navigation/native";

export default function FlatListEndereco({ data }: { data: AddressData }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Item", {
            endereco: data.endereco,
            id: data.baseNameInventario_id,
          });
        }}
      >
        <View style={styles.line} />
        <View style={styles.contentBody}>
          <View style={styles.enderecoBody}>
            <Text style={styles.enderecoTitle}>ENDEREÇO</Text>
            <View style={styles.dateBody}>
              <Text style={styles.enderecoDate}>Total SKU - {data.item}</Text>
            </View>
          </View>
          <View style={styles.bodyLine} />
          <View>
            <View style={styles.enderecoIcon}>
              <Text style={styles.nameTitle}>{data.endereco}</Text>
              {/* <FontAwesome name="check" size={24} color={Theme.colors.green} /> */}
              <FontAwesome
                name="close"
                size={24}
                color={Theme.colors.corIcon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
    marginBottom: 15,
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
    fontSize: 30,
    fontFamily: "Roboto_500Medium",
  },
});
