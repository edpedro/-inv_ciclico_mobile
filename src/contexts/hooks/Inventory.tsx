import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "./Auth";
import { AddressData, InventoryData, ItemData, UpdateData } from "../types";
import Toast from "react-native-toast-message";
import { navigate } from "../../routes/stack/Navigate";
import { useLoading } from "./Loading";

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

  const { setLoadingFetch } = useLoading();

  useEffect(() => {
    if (token) {
      loadListInventoryData();
    }
  }, [token]);

  async function loadListInventoryData(): Promise<void> {
    setLoadingFetch(true);
    if (token) {
      const { data } = await api.get("/nameinv", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setInventoryData(data);
    }
    setLoadingFetch(false);
  }

  async function ListAddressInventoryData(id: string): Promise<void> {
    if (id) {
      try {
        setLoadingFetch(true);
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
        setLoadingFetch(false);
        setAddressData(data);
      } catch (error) {
        setLoadingFetch(false);
        setAddressData(null);
        console.log(error);
      }
    }
  }

  async function ListOneAddressData(id: string): Promise<void> {
    if (id) {
      try {
        setLoadingFetch(true);
        const { data } = await api.get(`/nameinv/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoadingFetch(false);
        setFindOneAddressData(data);
      } catch (error) {
        setLoadingFetch(false);
        setFindOneAddressData(null);
        console.log(error);
      }
    }
  }

  async function ListItemEnderecoData(id: string, end: string): Promise<void> {
    const endereco = { endereco: end };

    try {
      setLoadingFetch(true);
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
      setLoadingFetch(false);
      setEnderecoItemData(data);
    } catch (error) {
      setLoadingFetch(false);
      setEnderecoItemData(null);
      console.log(error.messagem);
    }
  }

  async function ListItemData(idItem: string, idName: string): Promise<void> {
    const newData = { id: idItem };

    try {
      setLoadingFetch(true);
      const { data } = await api.post(`/ciclico/item/${idName}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoadingFetch(false);
      setItemData(data);
    } catch (error) {
      setLoadingFetch(false);
      setItemData(null);
      console.log(error.messagem);
    }
  }

  async function UpdateItemData(
    id: string,
    dataItem: UpdateData
  ): Promise<void> {
    try {
      setLoadingFetch(true);
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

      setLoadingFetch(false);
      Toast.show({
        type: "success",
        text1: "Status",
        text2: "Atualizado com sucesso",
      });
    } catch (error) {
      setLoadingFetch(false);
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Dados invalido!",
      });

      console.log(error);
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
