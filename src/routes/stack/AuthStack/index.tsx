import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "../../../screens/Register";

import Login from "../../../screens/Login";

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
