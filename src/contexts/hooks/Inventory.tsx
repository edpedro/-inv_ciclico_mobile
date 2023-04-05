import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "./Auth";
import { AddressData, InventoryData, ItemData, UpdateData } from "../types";
import Toast from "react-native-toast-message";
import { navigate } from "../../routes/stack/Navigate";

interface InventoryContextData {
  inventoryData?: InventoryData[];
  findOneAddressData?: InventoryData;
  addressData?: AddressData[];
  enderecoItemData?: ItemData[];
  itemData?: ItemData;
  updateDataTrue?: ItemData;
  loadListInventoryData: () => Promise<void>;
  ListAddressInventoryData: (id: string) => Promise<void>;
  ListOneAddressData: (id: string) => Promise<void>;
  ListItemEnderecoData: (id: string, endereco: string) => Promise<void>;
  ListItemData: (idItem: string, idName: string) => Promise<void>;
  UpdateItemData: (id: string, data: UpdateData) => Promise<void>;
}

const InventoryContext = createContext<InventoryContextData>(
  {} as InventoryContextData
);

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { token } = useAuth();
  const [inventoryData, setInventoryData] = useState<InventoryData[]>();
  const [addressData, setAddressData] = useState<AddressData[]>();
  const [findOneAddressData, setFindOneAddressData] = useState<InventoryData>();
  const [enderecoItemData, setEnderecoItemData] = useState<ItemData[]>();
  const [itemData, setItemData] = useState<ItemData>();
  const [updateDataTrue, setUpdateDataTrue] = useState<ItemData>();

  useEffect(() => {
    if (token) {
      loadListInventoryData();
    }
  }, [token]);

  async function loadListInventoryData(): Promise<void> {
    if (token) {
      const { data } = await api.get("/nameinv", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setInventoryData(data);
    }
  }

  async function ListAddressInventoryData(id: string): Promise<void> {
    if (id) {
      try {
        const { data } = await api.get(`/ciclico/endereco/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data.length > 0) {
          const allTrue = data.every((obj) => obj.status === true);

          if (allTrue) {
            await loadListInventoryData();
            navigate({
              name: "Inicio",
            });
          }
        }

        setAddressData(data);
      } catch (error) {
        setAddressData(null);
        console.log(error);
      }
    }
  }

  async function ListOneAddressData(id: string): Promise<void> {
    if (id) {
      try {
        const { data } = await api.get(`/nameinv/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFindOneAddressData(data);
      } catch (error) {
        setFindOneAddressData(null);
        console.log(error);
      }
    }
  }

  async function ListItemEnderecoData(id: string, end: string): Promise<void> {
    const endereco = { endereco: end };

    try {
      const { data } = await api.post<ItemData[]>(
        `/ciclico/endereco/${id}`,
        endereco,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.length > 0) {
        const allTrue = data.every((obj) => obj.status === true);

        if (allTrue) {
          navigate({
            name: "Endereco",
            params: {
              id: id,
            },
          });
        }
      }

      setEnderecoItemData(data);
    } catch (error) {
      setEnderecoItemData(null);
      console.log(error.messagem);
    }
  }

  async function ListItemData(idItem: string, idName: string): Promise<void> {
    const newData = { id: idItem };

    try {
      const { data } = await api.post(`/ciclico/item/${idName}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setItemData(data);
    } catch (error) {
      setItemData(null);
      console.log(error.messagem);
    }
  }

  async function UpdateItemData(
    id: string,
    dataItem: UpdateData
  ): Promise<void> {
    try {
      const { data } = await api.patch<ItemData>(`/ciclico/${id}`, dataItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate({
        name: "Item",
        params: {
          endereco: data.endereco,
          id: data.baseNameInventario_id,
        },
      });
      setUpdateDataTrue(data);
      //await ListItemEnderecoData(data.endereco, data.baseNameInventario_id);
      // console.log(data.endereco, data.baseNameInventario_id);
      Toast.show({
        type: "success",
        text1: "Status",
        text2: "Atualizado com sucesso",
      });
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Dados invalido!",
      });

      console.log(error.messagem);
    }
  }

  return (
    <InventoryContext.Provider
      value={{
        inventoryData,
        loadListInventoryData,
        addressData,
        ListAddressInventoryData,
        ListOneAddressData,
        findOneAddressData,
        enderecoItemData,
        ListItemEnderecoData,
        itemData,
        ListItemData,
        UpdateItemData,
        updateDataTrue,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export function inventoryContext(): InventoryContextData {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
