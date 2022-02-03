import { CartActions } from "../constants";
import { ActionType, StateType } from "../types";

export function cartReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "ADD_TO_CART":
      const { productID, quantity } = action.payload;
      return {
        ...state,
        cart: [...state.cart, { productID, quantity }],
        products: state.products.map((item) => {
          if (item._id === productID) {
            item.isInCart = true;
            console.debug("here krdiya true", item);
            return item;
          }
          return item;
        }),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.productID === action.payload.productID) {
            item.quantity = action.payload.quantity;
            return item;
          }
          return item;
        }),
      };

    case "SET_PRODUCTS":
      return { ...state, products: action.payload.data };

    case "UPDATE_CART_TOTAL_AMOUNT":
      return { ...state, total_amount: action.payload.data };

    default:
      return { ...state };
  }
}
