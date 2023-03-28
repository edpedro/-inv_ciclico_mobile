import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./stack/AuthStack";
import { navigationRef } from "./stack/Navigate";

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStack />
    </NavigationContainer>
  );
}
