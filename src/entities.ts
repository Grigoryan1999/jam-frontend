export interface ICategory {
  uuid: string;
  name: string;
  subscription: string;
  updated_at: string;
  created_at: string;
  products: IProduct[];
}

export interface IProduct {
  uuid: string;
  name: string;
  subscription: string;
  picture: string | null;
  drink: boolean;
  updated_at: string;
  created_at: string;
  minimalCost: number;
  marketProduct: IMarketProduct[];
}

export interface IMarketProduct {
  uuid: string;
  count: number;
  cost: number;
  discount: number;
  updated_at: string;
  created_at: string;
  market: IMarket;
}

export interface IMarket {
  uuid: string;
  address: string;
  latitude: number;
  longitude: number;
  updated_at: string;
  created_at: string;
}

export interface IProductForOrder {
  productUuid: string;
  count: number;
}

export interface IViewedProductForOrder extends IProductForOrder {
  name: string;
  picture: string | null;
  cost: number;
}

export interface IAuthorization {
  accessToken: string,
}

export interface ISignIn {
  email: string,
  password: string,
}

export interface ISignUp {
  email: string,
  password: string,
  name: string,
  login: string,
}

export interface IUser {
  uuid: string;
  name: string;
  email: string;
  login: string;
  role: IRole;
}

export interface IRole {
  uuid: string;
  name: string;
}

export interface Response<T> {
  message: T;
}
