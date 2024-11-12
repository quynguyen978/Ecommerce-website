import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from "../redux/fetchProduct/fetchAction";
import { url } from '../Utilities/url';
export const fetchProducts = () => {
      const token = localStorage.getItem('token');
      
      return async (dispatch) => {
            dispatch(fetchProductsRequest());
            try {
                  // Fetch from the /protected route first to validate the token
                  const authResponse = await fetch(`${url}/protected`, {
                        method: 'GET',
                        headers: {
                              'Authorization': `Bearer ${token}`,
                        },
                  });

                  // Check if the token is valid
                  // if (!authResponse.ok) {
                  //       throw new Error('Unauthorized');
                  // }

                  // If the token is valid, proceed with fetching the product data
                  const productResponse = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
                  const data = await productResponse.json();

                  // Dispatch success action with the fetched data
                  dispatch(fetchProductsSuccess(data));

            } catch (error) {
                  // Dispatch failure action in case of any error
                  dispatch(fetchProductsFailure(error.message));
            }
      };
};
