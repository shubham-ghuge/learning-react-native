
export type InitialDataType = {
  cart: [string];
  products: [ProductData];
  total_amount: number;
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
};

export type ServerProductResponse = {
  status: boolean;
  response: [ProductData];
};
