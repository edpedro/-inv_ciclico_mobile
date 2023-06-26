export interface InventoryData {
  id: string;
  date: string;
  name: string;
  firstStatus: boolean;
  secondStatus: boolean;
  user?: {
    name: string;
  };
}

export interface AddressData {
  id: string;
  endereco: string;
  item: string;
  firstStatus: boolean;
  secondStatus: boolean;
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
  firstCount: number;
  secondCount: number;
  firstStatus: boolean;
  secondStatus: boolean;
  username_id: string;
  baseNameInventario_id: string;
}

export interface UpdateData {
  id: number;
  saldoFisico: number;
  status?: boolean;
}

export interface UIpoints {
  totalAcertos: number;
  totalSegundaContagem: number;
  totalPoints: number;
}
