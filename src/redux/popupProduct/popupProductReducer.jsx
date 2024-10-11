import { SHOW_POPUP, HIDE_POPUP } from "./PopupProductAction";

// initial state
const initial = {
      isOpen: false,
}

const PopupProductReducer = (state = initial, action) => {
      switch(action.type) {
            case SHOW_POPUP: 
                  return {
                        ...state, 
                        isOpen: true,
            }
            case HIDE_POPUP: 
            return {
                  ...state,
                  isOpen: false,
            }
            default:
                  return state;
      }
}
export default PopupProductReducer;