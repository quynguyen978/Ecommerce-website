import { ACTIVE_SELECT_ITEM } from "./cateActiveItemAction";

// initial state
const initialState = {
      active_item: 'ALL',
}

// reducer function
 const cateActiveItem_reducer = (state = initialState, action) => {
      switch(action.type) {
            case ACTIVE_SELECT_ITEM:
                  return {
                        ...state, 
                        active_item: action.payload,
                  }
            default:
                  return state;
      }
}
export default cateActiveItem_reducer;