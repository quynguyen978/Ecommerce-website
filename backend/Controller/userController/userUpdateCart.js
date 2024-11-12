const User = require('../../models/User');

// update user cart products
const updateCartItems = async (req, res) => {
const {userId, productId, quantity} =req.body;
      try {
            // find user
            const user = await User.findById(userId).populate('cart.product');
            // console.log('user update', user);
            if(!user) {
                  console.log('Cannot found user');
                  res.status(404).json({message: 'Cannot found the user'});
            }

            // find products in user
            const productUpdate = user.cart.find((item) =>  item._id.equals(productId ));
            if(!productUpdate) {
                  console.log('Cannot find the product');
                  res.status(404).json({message: 'Cannot found the product.'});
            }
            productUpdate.quantity = quantity;
            // save the user's data
            await user.save();
            res.status(202).json({user: user});
      }
      catch(err) {
            console.error('Err', err);
            res.status(500).json({message: 'Cannot update the cart.'})
      }
}

module.exports = updateCartItems;