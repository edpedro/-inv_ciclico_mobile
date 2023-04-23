import { useEffect, useState, useRef } from "react";
import { TextInput } from "react-native";
import {
  Center,
  Box,
  VStack,
  FormControl,
  Button,
  Text,
  Input as InputNative,
  Icon,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { inventoryContext } from "../../contexts/hooks/Inventory";
import Toast from "react-native-toast-message";
import { UpdateData } from "../../contexts/types";
import { useLoading } from "../../contexts/hooks/Loading";

interface RouteParams {
  idItem: string;
  idName: string;
}

type RootStackParamList = {
  Input: RouteParams;
};

type ItemRouteProp = RouteProp<RootStackParamList, "Input">;

export default function Input({ route }: { route: ItemRouteProp }) {
  const { ListItemData, itemData, UpdateItemData } = inventoryContext();

  const { isLoadingFetch } = useLoading();

  const input2Ref = useRef<TextInput>(null);

  const [ativeInput, setAtiveInput] = useState(false);

  const [valueItem, setValueItem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [tipoEstoque, setTipoEstoque] = useState("");
  const [categoria, setCategoria] = useState("");
  const [saldoFisico, setSaldoFisico] = useState("");

  const idItem = route.params.idItem;
  const idName = route.params.idName;

  useEffect(() => {
    const handleListItemInput = async () => {
      if (idItem && idName) {
        ListItemData(idItem, idName);
      }
    };
    handleListItemInput();

    if (ativeInput) {
      input2Ref.current.focus();
    }
  }, [idItem, idName, ativeInput]);

  const handleTextInputChange = (item: string) => {
    setValueItem(item);

    if (item.toUpperCase() === itemData[0].item.toUpperCase()) {
      setAtiveInput(true);

      setDescricao(itemData[0].descricao);
      setEndereco(itemData[0].endereco);
      setCategoria(itemData[0].catItem);
      setTipoEstoque(itemData[0].tipoEstoque);
    } else {
      setDescricao("");
      setEndereco("");
      setCategoria("");
      setTipoEstoque("");
    }
  };

  function handleSubmit(saldoFisico: string) {
    if (descricao && endereco && tipoEstoque && saldoFisico && valueItem) {
      const data: UpdateData = {
        id: Number(itemData[0].id),
        saldoFisico: Number(saldoFisico),
        status: true,
      };

      UpdateItemData(itemData[0].baseNameInventario_id, data);
    } else {
      Toast.show({
        type: "error",
        text1: "Erro de atualizar",
        text2: "Favor preencher dados corretos!",
      });
    }
  }

  return (
    <Center w="100%" h="full" bgColor="white">
      <Box safeArea p="2" py="1" w="100%" maxW="350">
        <Text textAlign="center" bold>
          Informações
        </Text>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: "black",
              }}
            >
              Código
            </FormControl.Label>
            <InputNative
              bg="gray.200"
              _focus={{
                bg: "gray.100",
              }}
              value={valueItem}
              onChangeText={handleTextInputChange}
            />
          </FormControl>
          {ativeInput && (
            <>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "black",
                  }}
                >
                  Descrição
                </FormControl.Label>
                <InputNative
                  bg="gray.200"
                  isReadOnly={true}
                  value={descricao}
                  onChangeText={(descricao) => setDescricao(descricao)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "black",
                  }}
                >
                  Endereço
                </FormControl.Label>
                <InputNative
                  bg="gray.200"
                  isReadOnly={true}
                  value={endereco}
                  onChangeText={(endereco) => setEndereco(endereco)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "black",
                  }}
                >
                  Tipo Estoque
                </FormControl.Label>
                <InputNative
                  bg="gray.200"
                  isReadOnly={true}
                  value={tipoEstoque}
                  onChangeText={(tipoEstoque) => setTipoEstoque(tipoEstoque)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "black",
                  }}
                >
                  Categoria
                </FormControl.Label>
                <InputNative
                  bg="gray.200"
                  isReadOnly={true}
                  value={categoria}
                  onChangeText={(categoria) => setCategoria(categoria)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label
                  _text={{
                    color: "black",
                  }}
                >
                  Saldo
                </FormControl.Label>
                <InputNative
                  type="text"
                  bg="gray.200"
                  _focus={{
                    bg: "gray.100",
                  }}
                  value={saldoFisico}
                  onChangeText={(saldoFisico) => setSaldoFisico(saldoFisico)}
                  ref={input2Ref}
                />
              </FormControl>
              <Button
                mt="6"
                h="12"
                bg="tertiary.200"
                _text={{
                  color: "black",
                }}
                _pressed={{
                  bg: "tertiary.100",
                }}
                onPress={() => handleSubmit(saldoFisico)}
                isLoading={isLoadingFetch}
                _loading={{
                  color: "black",
                  _text: {
                    color: "black",
                  },
                }}
                isLoadingText="Carregando..."
                leftIcon={
                  <Icon
                    as={AntDesign}
                    name="checkcircleo"
                    size="md"
                    color="black"
                  />
                }
              ></Button>
              {/* <Button
                mt="6"
                h="12"
                bg="tertiary.200"
                _text={{
                  color: "dark.100",
                }}
                _pressed={{
                  bg: "tertiary.100",
                }}
                onPress={() => handleSubmit(saldoFisico)}
                isLoading={isLoadingFetch}
                _loading={{
                  color: "black",
                  _text: {
                    color: "black",
                  },
                }}
                isLoadingText="Carregando..."
              >
                <AntDesign
                  name="checkcircleo"
                  size={24}
                  style={{ color: "#000" }}
                />
              </Button> */}
            </>
          )}
        </VStack>
      </Box>
    </Center>
  );
}
