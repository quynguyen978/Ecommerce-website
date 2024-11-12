import Button from '../Button/Button'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from 'react-router-dom';
import { checkoutSchema } from '../../Utilities/schemaForm/checkoutSchema';
import { url } from '../../Utilities/url'
import './BillingForm.css';

export default function BillingForm () {
      const { register, handleSubmit, formState: { errors }} = useForm({
            resolver : zodResolver(checkoutSchema),
      });

      const [stripe, setStripe] = useState(null);
      const userId = useSelector((state) => state.loginUser.userId);
      const location = useLocation();
      const { subTotal } = location.state || {};

      // ///////////
      useEffect(() => {
            // Load the Stripe.js script
            const script = document.createElement('script');
            script.src = "https://js.stripe.com/v3/";
            script.async = true;
            script.onload = () => {
                setStripe(window.Stripe('pk_test_51QFjTzIBW5k5nN75Kzcs9tF7pviCo55SQVban2Zgx7dKFohdsok7RofwaNQkLZ4db5yRvA7bItrYFKTWVUw5nZ0a00kMRkLip2')); // Replace with your actual Stripe public key
            };
            document.body.appendChild(script);
    
            // Clean up the script when the component unmounts
            return () => {
                document.body.removeChild(script);
            };
        }, []);

      // handle form submission

      // const onSubmit =  async (data) => {
      //       try {
      //             const billingResponse = await fetch(`http://localhost:5000/user/billingAddress`, {
      //                   method: 'POST', 
      //                   body: JSON.stringify(data),
      //                   headers: {'Content-Type': 'application/json'}
      //             });
      //             const result = await billingResponse.json();
      //             // if ( !result.ok ) {
      //             //       throw new Error ('Billing address submission failed');
      //             // }
      //             console.log('billing address', result);

      //       // create stripe payment intent
      //             const paymentResponse = await fetch(`http://localhost:5000/create-checkout-session', {
      //                   method: 'POST',
      //                   headers: { 'Content-Type': 'application/json',},
      //                   body: JSON.stringify({
      //                         amount: subTotal,
      //                         currency: 'vnd', 
      //                   }),
      //             });
                  
      //             /////////
      //             const { id: sessionId } = await paymentResponse.json(); // Get session ID

      //   // Redirect to Stripe Checkout
      //   const stripe = window.Stripe('pk_test_51QFjTzIBW5k5nN75Kzcs9tF7pviCo55SQVban2Zgx7dKFohdsok7RofwaNQkLZ4db5yRvA7bItrYFKTWVUw5nZ0a00kMRkLip2'); // Make sure to include your Stripe public key
      //   const { error } = await stripe.redirectToCheckout({ sessionId });

      //   if (error) {
      //       console.error('Error redirecting to checkout:', error);
      //   }
      //       }
      //       catch(err) {
      //             console.error('Error during BillingAddress', err);
      //       }
      // }
      const onSubmit = async (data) => {
            if (!stripe) {
                console.error("Stripe has not loaded yet.");
                return;
            }
    
            try {
                // Submit billing address
                const billingResponse = await fetch(`${url}/user/billingAddress`, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                });
    
                if (!billingResponse.ok) {
                    throw new Error('Billing address submission failed');
                }
    
                // Create Stripe Checkout session
                const paymentResponse = await fetch(`${url}/create-checkout-session`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        amount: subTotal, // Ensure this is the correct amount in cents
                        currency: 'vnd',
                        userId,
                    }),
                });
    
                if (!paymentResponse.ok) {
                    throw new Error('Failed to create checkout session');
                }
    
                const { id: sessionId } = await paymentResponse.json(); // Make sure you are getting the sessionId
    
                // Redirect to Stripe Checkout
                const { error } = await stripe.redirectToCheckout({ sessionId });
    
                if (error) {
                    console.error('Error redirecting to checkout:', error);
                }
            } catch (err) {
                console.error('Error during BillingAddress', err);
            }
        };
        


      return (
            <div>
                  <form className='billingForm' onSubmit={handleSubmit(onSubmit)} >
                        <div className='billing_formGroup'>
                              <label htmlFor="full_name">FULL NAME:</label>
                              <input {...register('fullName')} type="text" id='full_name' placeholder="Enter Your Full Name Here!" />
                              { errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
                        </div>
                        <div className='billing_formGroup'>
                              <label htmlFor="email">EMAIL:</label>
                              <input {...register('email')} type="text" id='email' placeholder="Enter Your Email Here!" />
                              {errors.email && <p className='text-danger'> {errors.email.message} </p>}
                        </div>
                        <div className='billing_formGroup'>
                              <label htmlFor="phone_number">PHONE NUMBER:</label>
                              <input {...register('phone')} type="text" id='phone_number' placeholder="Enter Your Phone Number Here!" />
                              { errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                        </div>
                        <div className='billing_formGroup'>
                              <label htmlFor="address">ADDRESS:</label>
                              <input {...register('address')} type="text" id='address' placeholder="Enter Your Address Here!" />
                              { errors.address && <p className='text-danger'> {errors.address.message} </p>}
                        </div>
                        <Button type = 'submit' title='Place order' longBtn Italic/>
                  </form>
            </div>
      )
}