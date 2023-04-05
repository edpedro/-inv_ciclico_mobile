import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Theme } from "../../themes";
import { FontAwesome } from "@expo/vector-icons";
import { ItemData } from "../../contexts/types";
import { useNavigation } from "@react-navigation/native";

export default function FlatListItem({ data }: { data: ItemData }) {
  const navigation = useNavigation();
  return (
    <>
      {!data.status && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.content}
            onPress={() => {
              navigation.navigate("Input", {
                idItem: data.id,
                idName: data.baseNameInventario_id,
              });
            }}
            activeOpacity={0.8}
          >
            <View style={styles.contentBody}>
              <View style={styles.enderecoBody}>
                <Text style={styles.enderecoTitle}>Código</Text>
                <View style={styles.dateBody}>
                  <FontAwesome
                    name="close"
                    size={24}
                    color={Theme.colors.corIcon}
                  />
                </View>
              </View>
              <View>
                <View style={styles.enderecoIcon}>
                  <Text style={styles.nameTitle}>{data.item}</Text>
                  <Text style={styles.nameDescri}>{data.descricao}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
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
  },
  contentBody: {
    width: "100%",
    height: 80,
    paddingHorizontal: 10,
    borderRadius: 10,

    backgroundColor: Theme.colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
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
