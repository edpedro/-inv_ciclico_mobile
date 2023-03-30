import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Endereco from "../../../screens/Endereco";
import Input from "../../../screens/Input";
import Item from "../../../screens/Item";
import Login from "../../../screens/Login";
import Register from "../../../screens/Register";

import MenuTabs from "../MenuTabs";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Navigator initialRouteName="Inicio">
      <Screen
        options={{ headerShown: false }}
        name="Inicio"
        component={MenuTabs}
      />
      <Screen options={{ headerShown: false }} name="Input" component={Input} />
      <Screen options={{ headerShown: false }} name="Item" component={Item} />
      <Screen
        options={{ headerShown: false }}
        name="Endereco"
        component={Endereco}
      />
    </Navigator>
  );
}
