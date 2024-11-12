import { fetchUserCartRequest, fetchUserCartSuccess, fetchUserCartFailure } from "../redux/fetchUserCart/fetchUserCartAction";
import { url } from '../Utilities/url';
export const fetchCartData = (userId) => {

    return async (dispatch) => {
        dispatch(fetchUserCartRequest());
        try {
            const response = await fetch(`${url}/cart/${userId}`);
            const data = await response.json();
            dispatch(fetchUserCartSuccess(data));
        }
        catch (error) {
            dispatch(fetchUserCartFailure(error.message));
        }
    }
}
