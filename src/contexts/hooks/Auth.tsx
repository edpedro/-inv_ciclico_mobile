import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";

import Toast from "react-native-toast-message";

interface AuthData {
  username: string;
  name: string;
}

interface UItoken {
  token: string;
}

interface AuthContextData {
  authData?: AuthData;
  token: UItoken;
  setisLoading: (isLoading: boolean) => void;
  signIn: (username: string, password: string) => Promise<void>;
  register: (name: string, username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [token, setToken] = useState<UItoken>();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem("@AuthData");
      const token = await AsyncStorage.getItem("@Token");

      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        const _token: UItoken = JSON.parse(token);

        setAuthData(_authData);
        setToken(_token);
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  }

  async function signIn(username: string, password: string) {
    try {
      const {
        data: { payload, token },
      } = await api.post("/auth/login", {
        username,
        password,
      });

      setAuthData(payload);
      setToken(token);
      AsyncStorage.setItem("@AuthData", JSON.stringify(payload));
      AsyncStorage.setItem("@Token", JSON.stringify(token));

      Toast.show({
        type: "success",
        text1: "Acesso",
        text2: "Logado com sucesso",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro de acesso",
        text2: "Email ou Senha invalida!",
      });
    }
  }

  async function register(name: string, username: string, password: string) {
    try {
      const { data } = await api.post("users", {
        name,
        username,
        password,
      });

      setAuthData(data);
      AsyncStorage.setItem("@AuthData", JSON.stringify(data));

      Toast.show({
        type: "success",
        text1: "Acesso",
        text2: "Cadastro feito com sucesso",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro de acesso",
        text2: "Usuario já existe!",
      });
    }
  }

  async function signOut() {
    setAuthData(undefined);
    AsyncStorage.removeItem("@AuthData");
  }

  return (
    <AuthContext.Provider
      value={{
        authData,
        signIn,
        signOut,
        isLoading,
        register,
        token,
        setisLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
