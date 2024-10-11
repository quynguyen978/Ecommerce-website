import ShopHeader from "../ShopPage/ShopHeader/ShopHeader";
import CheckOutBilling from './CheckOutBilling/CheckOutBilling';
function CheckoutPage() {
      return <div >
            <ShopHeader title='CHECKOUT' checkoutHead/>
            <CheckOutBilling/>
      </div>
}
export default CheckoutPage;