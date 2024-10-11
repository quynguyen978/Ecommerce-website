// action types for fetching data
export const FETCH_PRODUCTS_REQUEST = 'FETCH PRODUCTS REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH PRODUCTS SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH PRODUCTS FAILURE';

// actions creators
export const fetchProductsRequest = () => ({
      type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products,
})

export const fetchProductsFailure = (error) => ({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error,
})