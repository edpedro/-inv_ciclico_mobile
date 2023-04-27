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
import { useForm, Controller } from "react-hook-form";
import { debounce } from "lodash";
import { AntDesign } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { inventoryContext } from "../../contexts/hooks/Inventory";
import Toast from "react-native-toast-message";
import { ItemData, UpdateData } from "../../contexts/types";
import { useLoading } from "../../contexts/hooks/Loading";
import Spinner from "../../components/Spinner";

interface RouteParams {
  dataItem: ItemData;
}

type RootStackParamList = {
  Input: RouteParams;
};

type ItemRouteProp = RouteProp<RootStackParamList, "Input">;

export default function Input({ route }: { route: ItemRouteProp }) {
  const { control, handleSubmit } = useForm();
  const { UpdateItemData } = inventoryContext();

  const { isLoadingFetch } = useLoading();

  const input2Ref = useRef<TextInput>(null);

  const [ativeInput, setAtiveInput] = useState(false);
  const [loading, setLoanding] = useState(false);

  const [descricao, setDescricao] = useState("");
  const [endereco, setEndereco] = useState("");

  const dataItem = route.params.dataItem;

  useEffect(() => {
    if (ativeInput) {
      setTimeout(() => {
        input2Ref.current.focus();
      }, 100);
    }
  }, [ativeInput]);

  const handleInputChange = debounce((value) => {
    setLoanding(true);
    if (value.toUpperCase() === dataItem.item.toUpperCase()) {
      setLoanding(true);
      setAtiveInput(true);

      setDescricao(dataItem.descricao);
      setEndereco(dataItem.endereco);
    } else {
      setDescricao("");
      setEndereco("");
    }
    setLoanding(false);
  }, 500);

  const onSubmit = (value) => {
    if (descricao && endereco && value.saldoFisico) {
      const data: UpdateData = {
        id: Number(dataItem.id),
        saldoFisico: Number(value.saldoFisico),
        status: true,
      };

      UpdateItemData(dataItem.baseNameInventario_id, data);
    } else {
      Toast.show({
        type: "error",
        text1: "Erro atualizar",
        text2: "Favor preencher dados corretos!",
      });
    }
  };

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
            <Controller
              control={control}
              render={({ field: { onBlur, value } }) => (
                <InputNative
                  autoFocus={!ativeInput}
                  bg="gray.200"
                  _focus={{
                    bg: "gray.100",
                  }}
                  onBlur={onBlur}
                  onChangeText={handleInputChange}
                  value={value}
                />
              )}
              name="codigo"
            />
          </FormControl>
          {loading ? (
            <Spinner />
          ) : (
            ativeInput && (
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
                    Saldo
                  </FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <InputNative
                        keyboardType="numeric"
                        bg="gray.200"
                        _focus={{
                          bg: "gray.100",
                        }}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        ref={input2Ref}
                      />
                    )}
                    name="saldoFisico"
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
                  onPress={handleSubmit(onSubmit)}
                  isLoading={isLoadingFetch}
                  _loading={{
                    _text: {
                      color: "black",
                    },
                  }}
                  _spinner={{
                    color: "black",
                  }}
                  isLoadingText="Atualizado..."
                  leftIcon={
                    <Icon
                      as={AntDesign}
                      name="checkcircleo"
                      size="md"
                      color="black"
                    />
                  }
                ></Button>
              </>
            )
          )}
        </VStack>
      </Box>
    </Center>
  );
}
