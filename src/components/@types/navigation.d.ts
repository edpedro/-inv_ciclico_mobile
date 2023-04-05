export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Inicio: {
        id?: string;
      };
      Endereco: {
        id?: string;
      };
      Item: {
        id?: string;
        endereco: string;
      };
      Input: {
        idItem?: string;
        idName?: string;
      };
    }
  }
}
