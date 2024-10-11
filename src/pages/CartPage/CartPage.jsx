import { useLocation } from "react-router-dom";
import ShopHeader from "../ShopPage/ShopHeader/ShopHeader";
import CartPageDetail from "./CartPageDetail/CartPageDetail";
import CartPageTotal from "./CartPageTotal/CartPageTotal";
import './CartPage.css';

function CartPage() {
      const location = useLocation();
      const {selectItem} = location.state || {};
      console.log('selectItem', selectItem)

      return <div>
                  <ShopHeader title='CART'/>
                  <div className="shopePageContainer">
                        <p className="cartPageTitle fs-4 fw-medium fst-italic">SHOPING CART</p>
                        <CartPageDetail/>
                        <CartPageTotal/>
                  </div>
            </div>
}
export default CartPage;