import { combineReducers } from "redux"; 
import fetchReducer from "./fetchProduct/fetchReducer";
import PopupProductReducer from "./popupProduct/popupProductReducer";
import select_product_reducer from "./popupProductDetail/popupProductDetailReducer";
import cateActiveItem_reducer from "./cateActiveItemShop/cateActiveItemReducer";
import countReducer from "./CountItemproductDetail/countItemReducer";
import { login_reducer } from "./userLogin/userLoginReducer";

const rootReducer = combineReducers ({
      fetchdata: fetchReducer,
      popupProduct: PopupProductReducer,
      selectProduct: select_product_reducer,
      cateActiveItem: cateActiveItem_reducer,
      countItem: countReducer,
      loginUser: login_reducer,
})
export default rootReducer;