export interface InventoryData {
  id: string;
  date: string;
  name: string;
  status: string;
  user?: {
    name: string;
  };
}

export interface AddressData {
  id: string;
  endereco: string;
  item: string;
  status: boolean;
  baseNameInventario_id?: string;
}

export interface ItemData {
  id: string;
  item: string;
  descricao: string;
  endereco: string;
  tipoEstoque: string;
  catItem: string;
  saldoWms: number;
  saldoFisico: number;
  status: boolean;
  username_id: string;
  baseNameInventario_id: string;
}

export interface UpdateData {
  id: number;
  saldoFisico: number;
  status: boolean;
}
