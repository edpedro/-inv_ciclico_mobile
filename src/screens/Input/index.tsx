import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FlatListEndereco from "../../components/FlatListEndereco";
import FlatListInventario from "../../components/FlatListInventario";
import FlatListItem from "../../components/FlatListItem";
import { Theme } from "../../themes";
import { AntDesign } from "@expo/vector-icons";

export default function Input() {
  const [userName, setUserName] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View>
          <Text>Código</Text>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            style={styles.input}
          />
          <Text style={{ color: "blue" }}>{userName}</Text>
        </View>
        <View>
          <Text>Descrição</Text>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            style={styles.input}
            editable={false}
          />
          <Text style={{ color: "blue" }}>{userName}</Text>
        </View>
        <View>
          <Text>Endereço</Text>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            style={styles.input}
            editable={false}
          />
          <Text style={{ color: "blue" }}>{userName}</Text>
        </View>
        <View>
          <Text>Tipo Estoque</Text>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            style={styles.input}
            editable={false}
          />
          <Text style={{ color: "blue" }}>{userName}</Text>
        </View>
        <View>
          <Text>Categoria</Text>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            style={styles.input}
            editable={false}
          />
          <Text style={{ color: "blue" }}>{userName}</Text>
        </View>
        <View>
          <Text>Saldo</Text>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            style={styles.input}
          />
          <Text style={{ color: "blue" }}>{userName}</Text>
        </View>
        <TouchableOpacity style={styles.icon}>
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
