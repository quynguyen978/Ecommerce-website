import './CheckOutBilling.css';
import BillingForm from '../../../components/BillingForm/BillingForm';
import CheckoutTotalOrder from '../../../components/CheckoutTotalOrder/CheckoutTotalOrder';

export default function CheckOutBilling() {
      return (
            <div className='billingContainer'>
                  <h5>BILLING DETAILS</h5>
                  <div className='checkoutBillingGid'>
                        <BillingForm/>
                        <CheckoutTotalOrder/>
                  </div>
            </div>
      )
}