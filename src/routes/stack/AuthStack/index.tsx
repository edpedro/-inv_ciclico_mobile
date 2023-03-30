import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Endereco from "../../../screens/Endereco";
import Input from "../../../screens/Input";
import Item from "../../../screens/Item";
import Login from "../../../screens/Login";
import Register from "../../../screens/Register";

import MenuTabs from "../MenuTabs";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Navigator initialRouteName="Login">
      <Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
      />
      <Screen options={{ headerShown: false }} name="Login" component={Login} />
    </Navigator>
  );
}
