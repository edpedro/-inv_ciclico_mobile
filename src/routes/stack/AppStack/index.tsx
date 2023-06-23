import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuTabs from "../MenuTabs";
import Input from "../../../screens/Input";
import Item from "../../../screens/Item";
import Endereco from "../../../screens/Endereco";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Navigator>
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
