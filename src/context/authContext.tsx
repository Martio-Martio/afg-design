/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<ContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<[string]>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour consommer le contexte
export const useAuthContext = (): ContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
