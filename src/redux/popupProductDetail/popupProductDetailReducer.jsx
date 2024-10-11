import { CLEAR_PRODUCT, SELECT_PRODUCT } from "./popupProductDetailAction";

// initial state
const initialState = {
      product : null,
}

const select_product_reducer = (state = initialState, action) => {
      switch(action.type) {
            case SELECT_PRODUCT:
                  return {
                        ...state, 
                        product : action.payload,
                  }
            case CLEAR_PRODUCT:
                  return {
                        ...state,
                        product: null,
                  }
            default:
            return state;
      }
}
export default select_product_reducer;