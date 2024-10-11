import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from "../redux/fetchProduct/fetchAction";
export const fetchProducts = () => {
      return async (dispatch) => {
            dispatch(fetchProductsRequest());
            try {
                  const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
                  const data = await response.json();
                  dispatch(fetchProductsSuccess(data));
            }
            catch (error) {
                  dispatch(fetchProductsFailure(error.message));
            }
      }
}