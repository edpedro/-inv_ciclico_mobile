import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./stack/AppStack";
import AuthStack from "./stack/AuthStack";
import { navigationRef } from "./stack/Navigate";
import { useAuth } from "../contexts/hooks/Auth";

export default function Routes() {
  const { authData, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Carregando informações....</Text>
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
