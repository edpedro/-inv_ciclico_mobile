import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useAuth } from "../../contexts/hooks/Auth";
import { Theme } from "../../themes";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.cardTitle}>
        <Text style={styles.titleWelcome}>Bem-vindo</Text>
      </View>
      <Text style={styles.titleLogin}>Cadastrar</Text>
      <View style={styles.content}>
        <View style={styles.contentName}>
          <Text style={styles.titleName}>Nome:</Text>
          <TextInput
            style={styles.inputName}
            value={name}
            onChangeText={setName}
          />
        </View>
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
            onPress={() => register(name, username, password)}
          >
            <Text style={styles.titleAcesso}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.criarLogin}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.titleLog}>
            Acessa a conta? <Text style={styles.loginTitle}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
  titleNameLogo: {
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
  contentName: {
    marginBottom: 10,
  },
  titleName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Theme.colors.primary,
  },
  inputName: {
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
  contentUsername: {
    marginBottom: 10,
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
  criarLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  titleLog: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: Theme.colors.primary,
  },
  loginTitle: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    color: Theme.colors.primary,
  },
});
