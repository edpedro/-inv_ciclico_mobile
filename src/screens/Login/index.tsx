import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Theme } from "../../themes";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardTitle}>
        <Text style={styles.titleWelcome}>Bem-vindo</Text>
      </View>
      <Text style={styles.titleLogin}>Login</Text>
      <View style={styles.content}>
        <View style={styles.contentUsername}>
          <Text style={styles.titleUsername}>Usuario:</Text>
          <TextInput style={styles.inputUsername} />
        </View>
        <View style={styles.contentPassword}>
          <Text style={styles.titlePassword}>Senha:</Text>
          <TextInput style={styles.inputPassword} />
        </View>
        <View style={styles.contentButton}>
          <TouchableOpacity style={styles.buttonAcesso}>
            <Text style={styles.titleAcesso}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.purple,
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
});
