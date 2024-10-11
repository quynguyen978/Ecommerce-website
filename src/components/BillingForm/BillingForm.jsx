import Button from '../Button/Button'
import './BillingForm.css';
export default function BillingForm () {
      return (
            <div>
                  <form className='billingForm' >
                        <div className='billing_formGroup'>
                              <label htmlFor="full_name">FULL NAME:</label>
                              <input type="text" id='full_name' placeholder="Enter Yyour Full Name Here!" />
                        </div>
                        <div className='billing_formGroup'>
                              <label htmlFor="email">EMAIL:</label>
                              <input type="text" id='email' placeholder="Enter Your Email Here!" />
                        </div>
                        <div className='billing_formGroup'>
                              <label htmlFor="phone_number">PHONE NUMBER:</label>
                              <input type="text" id='phone_number' placeholder="Enter Your Phone Number Here!" />
                        </div>
                        <div className='billing_formGroup'>
                              <label htmlFor="address">ADDRESS:</label>
                              <input type="text" id='address' placeholder="Enter Your Address Here!" />
                        </div>
                        <Button title='Place order' longBtn Italic/>
                  </form>
            </div>
      )
}