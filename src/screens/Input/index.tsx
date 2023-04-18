import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Theme } from "../../themes";
import { AntDesign } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { inventoryContext } from "../../contexts/hooks/Inventory";
import Toast from "react-native-toast-message";
import { UpdateData } from "../../contexts/types";

interface RouteParams {
  idItem: string;
  idName: string;
}

type RootStackParamList = {
  Input: RouteParams;
};

type ItemRouteProp = RouteProp<RootStackParamList, "Input">;

export default function Input({ route }: { route: ItemRouteProp }) {
  const { ListItemData, itemData, UpdateItemData } = inventoryContext();

  const [valueItem, setValueItem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [tipoEstoque, setTipoEstoque] = useState("");
  const [categoria, setCategoria] = useState("");
  const [saldoFisico, setSaldoFisico] = useState("");

  const idItem = route.params.idItem;
  const idName = route.params.idName;

  useEffect(() => {
    const handleListItemInput = async () => {
      if (idItem && idName) {
        ListItemData(idItem, idName);
      }
    };
    handleListItemInput();
  }, [idItem, idName]);

  const handleTextInputChange = (item: string) => {
    setValueItem(item);

    if (item.toUpperCase() === itemData[0].item.toUpperCase()) {
      setDescricao(itemData[0].descricao);
      setEndereco(itemData[0].endereco);
      setCategoria(itemData[0].catItem);
      setTipoEstoque(itemData[0].tipoEstoque);
    } else {
      setDescricao("");
      setEndereco("");
      setCategoria("");
      setTipoEstoque("");
    }
  };

  function handleSubimit(saldoFisico: string) {
    if (descricao && endereco && tipoEstoque && saldoFisico && valueItem) {
      const data: UpdateData = {
        id: Number(itemData[0].id),
        saldoFisico: Number(saldoFisico),
        status: true,
      };

      UpdateItemData(itemData[0].baseNameInventario_id, data);
    } else {
      Toast.show({
        type: "error",
        text1: "Erro de atualizar",
        text2: "Favor preencher dados corretos!",
      });
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View>
          <Text>Código</Text>
          <TextInput
            value={valueItem}
            onChangeText={handleTextInputChange}
            style={styles.input}
          />
        </View>
        <View>
          <Text>Descrição</Text>
          <TextInput
            value={descricao}
            onChangeText={(descricao) => setDescricao(descricao)}
            style={styles.input}
            editable={false}
          />
        </View>
        <View>
          <Text>Endereço</Text>
          <TextInput
            value={endereco}
            onChangeText={(endereco) => setEndereco(endereco)}
            style={styles.input}
            editable={false}
          />
        </View>
        <View>
          <Text>Tipo Estoque</Text>
          <TextInput
            value={tipoEstoque}
            onChangeText={(tipoEstoque) => setTipoEstoque(tipoEstoque)}
            style={styles.input}
            editable={false}
          />
        </View>
        <View>
          <Text>Categoria</Text>
          <TextInput
            value={categoria}
            onChangeText={(categoria) => setCategoria(categoria)}
            style={styles.input}
            editable={false}
          />
        </View>
        <View>
          <Text>Saldo</Text>
          <TextInput
            value={saldoFisico}
            onChangeText={(saldoFisico) => setSaldoFisico(saldoFisico)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleSubimit(saldoFisico)}
        >
          <AntDesign name="checkcircleo" size={70} color={Theme.colors.green} />
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
  content: {
    marginTop: 60,
  },
  contentTitle: {
    fontSize: 32,
    fontFamily: "Roboto_500Medium",
  },
  input: {
    width: "95%",
    height: 44,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: Theme.colors.primarySeg,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
function control(
  arg0: string
): JSX.IntrinsicAttributes &
  JSX.IntrinsicClassAttributes<TextInput> &
  Readonly<import("react-native").TextInputProps> {
  throw new Error("Function not implemented.");
}
