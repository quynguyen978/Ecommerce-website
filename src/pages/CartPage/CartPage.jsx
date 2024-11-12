import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ShopHeader from "../ShopPage/ShopHeader/ShopHeader";
import CartPageDetail from "./CartPageDetail/CartPageDetail";
import CartPageTotal from "./CartPageTotal/CartPageTotal";
import './CartPage.css';

function CartPage() {
      const userId = useSelector((state) => state.loginUser.userId);
      const cartUserItems = useSelector((state) => state.fetchUserCart.userCart);

      // calculate the cart's product total
      const [subTotal, setSubTotal] = useState(0);
      useEffect(()=> {
            if(cartUserItems && cartUserItems.cart && cartUserItems.cart.length > 0 ) {
                 const total = cartUserItems.cart.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                 }, 0);
                 setSubTotal(total); 
            }
            else {
                  setSubTotal(0);
            }
      }, [cartUserItems]);

      return <div>
                  <ShopHeader title='CART'/>
                  { userId && <div className="cartPageContainer">
                        <p className="cartPageTitle fs-4 fw-medium fst-italic">SHOPING CART</p>
                        <CartPageDetail userId={userId} subTotal ={subTotal}/>
                        <div>
                        <CartPageTotal subTotal={subTotal} />
                        </div>
                  </div> }
            </div>
}
export default CartPage;