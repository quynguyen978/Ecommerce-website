// action types for fetching data
export const FETCH_USER_CART_REQUEST = 'FETCH USER CART REQUEST';
export const FETCH_USER_CART_SUCCESS = 'FETCH USER CART SUCCESS';
export const FETCH_USER_CART_FAILURE = 'FETCH USER CART FAILURE';

// actions creators
export const fetchUserCartRequest = () => ({
      type: FETCH_USER_CART_REQUEST,
});

export const fetchUserCartSuccess = (products) => ({
      type: FETCH_USER_CART_SUCCESS,
      payload: products,
})

export const fetchUserCartFailure = (error) => ({
      type: FETCH_USER_CART_FAILURE,
      payload: error,
})