import { useEffect } from "react";

import { Box, HStack, Avatar, Text } from "native-base";

import { useAuth } from "../../contexts/hooks/Auth";

const user = require("../../assets/user.png");

export default function Header() {
  const { authData, points, loadPoints } = useAuth();

  useEffect(() => {
    loadPoints();
  }, []);

  return (
    <Box>
      <HStack
        padding={4}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        safeArea
      >
        <Box flexDirection="row" alignItems="flex-end">
          <Avatar bg="green.500" source={user}></Avatar>
          <Text fontFamily="Roboto" fontSize={16} ml={2}>
            {authData.name}
          </Text>
        </Box>
        <Box flexDirection="column" alignItems="center" mr={4}>
          <Text>Pontos</Text>
          <Text>{points?.totalPoints}</Text>
        </Box>
      </HStack>
    </Box>
  );
}
