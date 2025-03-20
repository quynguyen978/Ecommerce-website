const User = require('../../models/User');

// Get the user's cart details
const getUserCart = async (req, res) => {
    const { userId } = req.params;
      try {
            const user = await User.findById(userId).populate('cart.product');
            if( !user ) {
                  console.log('Can not find the user');
                  return  res.status(404).json({message: 'User not found'});
            }

            const userCart = user.cart;
            if ( !userCart || userCart.length === 0) {
                  return res.status(400).json({ error: "Cart is empty. Cannot proceed to checkout." });
              }

            // Calculate total price
            const totalPrice = userCart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

            // limit the checkout
            const maxCheckout = 999999999;
            if(totalPrice >= maxCheckout ) {
                  return res.status(400).json({ error: "The limit for checkout is đ999.999.999, please split your checkout"});
            }
            // send user' cart data to front end
            res.status(200).json({cart: userCart, totalPrice});
      }
      catch(err) {
            console.error('Error fetching cart', err);
            res.status(500).json({message: 'Cannot fetch the cart.'});
      }

};

module.exports = getUserCart;
