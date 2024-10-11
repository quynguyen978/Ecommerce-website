import { COUNT_DOWN, COUNT_UP } from "./countItemAction";

// initial state

const initialState = {
      item_number : 1,
}

// reducer
const countReducer = (state = initialState, action) => {
      switch(action.type) {
            case COUNT_UP:
                  return {
                        ...state, 
                        item_number: state.item_number + 1,
                  }
            case COUNT_DOWN:
                  return {
                        ...state,
                        item_number: state.item_number > 1 ? state.item_number - 1 : 1,
                  }
            default:
            return state;
      }
}
export default countReducer;