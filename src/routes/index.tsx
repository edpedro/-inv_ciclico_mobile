import { Heading } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./stack/AppStack";
import AuthStack from "./stack/AuthStack";
import { navigationRef } from "./stack/Navigate";
import { useAuth } from "../contexts/hooks/Auth";
import { useLoading } from "../contexts/hooks/Loading";

export default function Routes() {
  const { authData } = useAuth();
  const { isLoading } = useLoading();

  if (isLoading) {
    return (
      <Heading
        mt="1"
        _dark={{
          color: "warmGray.200",
        }}
        color="dark.900"
        fontWeight="medium"
        size="xl"
      >
        Carregando...
      </Heading>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
