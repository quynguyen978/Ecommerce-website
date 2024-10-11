import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./fetchAction";

// initial state
const initialState = {
      products: [], 
      loading: false,
      error: null,
}

// reducer function
const fetchReducer = (state = initialState, action) => {
      switch (action.type) {
            case FETCH_PRODUCTS_REQUEST:
                  return {
                        ...state, 
                        loading: true,
                        error: null,
                  };

            case FETCH_PRODUCTS_SUCCESS:
                  return {
                        ...state, 
                        products: action.payload,
                        loading: false,
                  }
            
            case FETCH_PRODUCTS_FAILURE:
                  return {
                        ...state, 
                        loading: false,
                        error: action.payload,
                  }
            default:
                  return state;
      }
}
export default fetchReducer;