import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Theme } from "../../themes";
import { useAuth } from "../../contexts/hooks/Auth";
import { useState } from "react";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardTitle}>
        <Text style={styles.titleWelcome}>Bem-vindo</Text>
      </View>
      <Text style={styles.titleLogin}>Login</Text>
      <View style={styles.content}>
        <View style={styles.contentUsername}>
          <Text style={styles.titleUsername}>Usuario:</Text>
          <TextInput
            style={styles.inputUsername}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.contentPassword}>
          <Text style={styles.titlePassword}>Senha:</Text>
          <TextInput
            style={styles.inputPassword}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.contentButton}>
          <TouchableOpacity
            style={styles.buttonAcesso}
            onPress={() => signIn(username, password)}
          >
            <Text style={styles.titleAcesso}>Acessar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.criarConta}
          onPress={() => navigation.replace("Register")}
        >
          <Text style={styles.titleConta}>
            Não possuir uma conta?{" "}
            <Text style={styles.criarTitle}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.green,
  },
  cardTitle: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  titleWelcome: {
    fontSize: 24,
    fontWeight: "400",
    color: Theme.colors.primary,
  },
  titleName: {
    fontSize: 28,
    fontWeight: "bold",
    color: Theme.colors.primary,
  },
  titleLogin: {
    textAlign: "center",
    marginTop: 60,
    fontSize: 28,
    fontWeight: "bold",
    color: Theme.colors.primary,
  },
  content: {
    paddingHorizontal: 30,
    marginTop: 60,
  },
  contentUsername: {
    marginBottom: 20,
  },
  titleUsername: {
    fontSize: 16,
    fontWeight: "bold",
    color: Theme.colors.primary,
  },
  inputUsername: {
    width: "100%",
    height: 41,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: Theme.colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  contentPassword: {},
  titlePassword: {
    fontSize: 16,
    fontWeight: "bold",
    color: Theme.colors.primary,
  },
  inputPassword: {
    width: "100%",
    height: 41,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: Theme.colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  contentButton: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAcesso: {
    width: 171,
    height: 42,
    borderRadius: 10,
    backgroundColor: Theme.colors.primary,
    justifyContent: "center",
  },
  titleAcesso: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  criarConta: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  titleConta: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: Theme.colors.primary,
  },
  criarTitle: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    color: Theme.colors.primary,
  },
});
