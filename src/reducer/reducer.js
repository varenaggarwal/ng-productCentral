export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const TOGGLE_FROM_WISHLIST = "TOGGLE_FROM_WISHLIST";
export const ROUTE = "ROUTE";
export const INITIAL_LOAD = "INITIAL_LOAD";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const INC_CART_QUANTITY = "INC_CART_QUANTITY";
export const DEC_CART_QUANTITY = "DEC_CART_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SORT_HIGH_TO_LOW = "SORT_HIGH_TO_LOW";
export const SORT_LOW_TO_HIGH = "SORT_LOW_TO_HIGH";

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FROM_WISHLIST:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, wishlist: !product.wishlist }
            : product
        ),
      };

    case ADD_TO_WISHLIST:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, wishlist: true }
            : product
        ),
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, wishlist: false }
            : product
        ),
      };

    case ADD_TO_CART:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload ? { ...product, cartQty: 1 } : product
        ),
      };

    case INC_CART_QUANTITY:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, cartQty: product.cartQty + 1 }
            : product
        ),
      };

    case DEC_CART_QUANTITY:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, cartQty: product.cartQty - 1 }
            : product
        ),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload ? { ...product, cartQty: 0 } : product
        ),
      };

    case SORT_HIGH_TO_LOW:
      return {};

    case SORT_LOW_TO_HIGH:
      return {};

    case ROUTE:
      return { ...state, route: action.payload };

    case INITIAL_LOAD:
      return { ...state, productData: action.payload };

    default:
      return state;
  }
};
