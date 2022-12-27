import { IProduct, IProductForOrder, IViewedProductForOrder } from './../entities';
import { IInitialState } from "./reducers";

export const categoriesSelector = (state: IInitialState) =>
  state.categoryList.categories;

export const productsForOrderSelector = (state: IInitialState) =>
  state.categoryList.productsForOrder;

export const authSelector = (state: IInitialState) =>
  state.auth;

export const viewedProductsForOrderSelector = (state: IInitialState) => {
  const categoryWithProducts = categoriesSelector(state);

  const viewedProductsArray = productsForOrderSelector(state)?.map((productForOrder: IProductForOrder) => {
    let productItem;
    if (categoryWithProducts) {
      for (let i = 0; i < categoryWithProducts?.length; i++) {
        const productByUuid = categoryWithProducts[i].products.find((element: IProduct) => (
          element.uuid === productForOrder.productUuid
        ))

        if (productByUuid) {
          productItem = { ...productByUuid };
          break;
        }
      }
    }

    const viewedProductItem: IViewedProductForOrder = {
      name: productItem?.name || '',
      cost: productItem?.minimalCost || 0,
      picture: productItem?.picture || '',
      count: productForOrder.count,
      productUuid: productForOrder.productUuid
    }

    return viewedProductItem;
  });

  return viewedProductsArray;
}