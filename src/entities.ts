export interface ICategory {
  uuid: string;
  name: string;
  subscription: string;
  updated_at: string;
  created_at: string;
  products: IProduct[];
}

export interface IProduct {
  uuid: number;
  name: string;
  subscription: string;
  picture: string | null;
  drink: boolean;
  updated_at: string;
  created_at: string;
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

export interface Response<T> {
  message: T;
}
