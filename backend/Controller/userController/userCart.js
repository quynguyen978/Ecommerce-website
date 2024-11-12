const User = require('../../models/User');

// Get the user's cart details
const getUserCart = async (req, res) => {
    const { userId } = req.params;
      try {
            const user = await User.findById(userId).populate('cart.product');
            if( !user ) {
                  console.log('Can not find the user');
                  res.status(404).json({message: 'User not found'});
            }
            // send user' cart data to front end
            res.status(200).json({cart: user.cart});
      }
      catch(err) {
            console.error('Error fetching cart', err);
            res.status(500).json({message: 'Cannot fetch the cart.'});
      }

};

module.exports = getUserCart;
