import { FETCH_USER_CART_REQUEST ,FETCH_USER_CART_SUCCESS, FETCH_USER_CART_FAILURE } from "./fetchUserCartAction";

// initial state
const initialState = {
      userCart: [], 
      loading: false,
      error: null,
}

// reducer function
const fetchUserCartReducer = (state = initialState, action) => {
      switch (action.type) {
            case FETCH_USER_CART_REQUEST:
                  return {
                        ...state, 
                        loading: true,
                        error: null,
                  };

            case FETCH_USER_CART_SUCCESS:
                  return {
                        ...state, 
                        userCart: action.payload,
                        loading: false,
                  }
            
            case FETCH_USER_CART_FAILURE:
                  return {
                        ...state, 
                        loading: false,
                        error: action.payload,
                  }
            default:
                  return state;
      }
}
export default fetchUserCartReducer;