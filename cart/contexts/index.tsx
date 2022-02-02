import { createContext, useContext } from "react";
import { InitialDataType, ProviderProp } from "../types";

const initialData: InitialDataType = {
  cart: [""],
};

const CartContext = createContext<InitialDataType>(initialData);

export default function CartContextProvider({ children }: ProviderProp) {
  return (
    <CartContext.Provider value={{ cart: [""] }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
