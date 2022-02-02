import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers";
import {
  StateType,
  ProviderProp,
  ContextValue,
  ProductData,
  CartValue,
} from "../types";

const initialData: StateType = {
  cart: [{}] as CartValue[],
  products: [{}] as ProductData[],
  total_amount: 0,
};

const CartContext = createContext<ContextValue>({} as ContextValue);

export default function CartContextProvider({ children }: ProviderProp) {
  const [state, dispatch] = useReducer(cartReducer, initialData);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
