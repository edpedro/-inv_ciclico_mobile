import { Box, Button, Center, Heading } from "native-base";
import Header from "../../components/Header";
import { Theme } from "../../themes";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/hooks/Auth";

export default function Acount() {
  const { signOut } = useAuth();

  return (
    <Box flex={1} h="full" w="100%" flexDirection="column" bg="white">
      <Center w="100%" h="full">
        <Heading pb="3" size="xl">
          Sair
        </Heading>
        <Button
          bg="tertiary.200"
          _text={{
            color: "dark.100",
          }}
          _pressed={{
            bg: "tertiary.100",
          }}
          onPress={signOut}
          _loading={{
            color: "black",
            _text: {
              color: "black",
            },
          }}
          isLoadingText="Carregando..."
        >
          <MaterialIcons
            name="exit-to-app"
            size={100}
            color={Theme.colors.green}
          />
        </Button>
      </Center>
    </Box>
  );
}
