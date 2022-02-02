import React from "react";

export type ActionType =
  | {
      type: "ADD_TO_CART";
      payload: { productID: string; quantity: number };
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productID: string; quantity: number };
    }
  | { type: "SET_PRODUCTS"; payload: { data: ProductData[] } }
  | { type: "UPDATE_CART_TOTAL_AMOUNT"; payload: { data: number } };

export type StateType = {
  cart: CartValue[];
  products: ProductData[];
  total_amount: number;
};

export type CartValue = {
  productID: string;
  quantity: number;
};

export type ContextValue = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export type ProviderProp = {
  children: React.ReactChild;
};

export type ProductData = {
  _id: string;
  name: string;
  description: string;
  categoryId: string;
  price: number;
  discount: number;
  imgUrl: URL;
  farmerId: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
  isInCart?: Boolean;
};

export type ServerProductResponse = {
  status: boolean;
  response: [ProductData];
};
