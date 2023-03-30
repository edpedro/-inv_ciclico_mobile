import { View, Image, Text, StyleSheet } from "react-native";

import { useAuth } from "../../contexts/hooks/Auth";

const profile = require("../../assets/profile.png");

export default function Header() {
  const { authData } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={profile} style={styles.imageProfile} />
        <Text style={styles.contentTitle}>{authData.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  imageProfile: {
    width: 40,
    height: 40,
  },
  contentTitle: {
    fontSize: 14,
    fontFamily: "Roboto_300Light",
    marginLeft: 5,
  },
});
