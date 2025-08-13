import { createContext, useState } from "react";
export const GlobalStore = createContext();

function ContextProvider({ children }) {
  const [User, setUser] = useState(null);
  return (
    <GlobalStore.Provider value={{ User, setUser }}>
      {children}
    </GlobalStore.Provider>
  );
}
export default ContextProvider;
