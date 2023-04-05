import React from "react";

import { AuthProvider } from "./hooks/Auth";
import { InventoryProvider } from "./hooks/Inventory";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <AuthProvider>
      <InventoryProvider>{children}</InventoryProvider>
    </AuthProvider>
  );
};

export default AppProvider;
