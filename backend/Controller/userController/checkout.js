const Stripe = require('stripe');
const User = require('../../models/User');
const stripe = Stripe(process.env.SECRET_KEY);
// // const stripe = require('stripe')('sk_test_51QFjTzIBW5k5nN758NP3ws3y1vKBtxCD8lGEiPaWZjE3GIO8MzqNT7u2PmtffZr4xxsrZ5ToJ0mYcPQcOqrn755e00d7O2V17y');


// const checkout = async(req, res) => {
//       const {amount, currency} = req.body;
//       try {
//             const paymentIntent = await stripe.paymentIntents.create({
//                   amount: amount,
//                   currency: currency,
//                   automatic_payment_methods: {
//                         enabled: true,
//                       },
                  
//             })
//            res.json({ clientSecret: paymentIntent.client_secret })
//       } catch(err) {
//             console.error('Error during payment intent creation:', err.message); // Log the error message
//             res.status(500).json({ error: 'Payment failed' });
//       }
// }

// module.exports = checkout;


const checkout = async (req, res) => {

      try {
          const {userId, amount, currency } = req.body;
      const userCart = await User.findById(userId);
      console.log('usercart', userCart.cart)
      const products = await userCart.cart;
      const lineItems = products.map((product) => ({
            price_data: {
                  currency: currency,
                  product_data: {
                      name: product.name,
                      images: [product.image],
                  },
      
                  unit_amount: product.price, // Amount in the smallest currency unit (e.g., cents)
              },
              quantity: product.quantity,
      }));
          // Create a new Checkout Session
          const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items: lineItems,
              mode: 'payment',
              success_url: 'http://localhost:3000/payment-success', // Replace with your success URL
              cancel_url: 'http://localhost:3000/payment-cancel', // Replace with your cancel URL
          });
      
          // Send the session ID to the client
          res.json({ id: session.id });
          userCart.cart = [];
          userCart.save();
      }
      catch(err) {
            console.error('Error during checkout session creation:', err.message); // Log the error message
            res.status(500).json({ error: 'Checkout session creation failed' }); // Send error response
      
      }
}
module.exports = checkout;
      