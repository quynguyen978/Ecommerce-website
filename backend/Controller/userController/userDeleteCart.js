const User = require('../../models/User');
// const Product = require('../../models/Product');

// delete user's cart products
const cartDeleted = async (req, res) => {
      const {userId, productId} = req.body;
      try {
            const user = await User.findById(userId).populate('cart.product');
            
            // console.log('found user to update', user);
            if (!user) {
                  console.log('Can not find the user');
                  res.status(404).json({ message: 'Can not found the user'});
            }
            // find product that will be deleted
            const productDeleted =  user.cart.find((item) =>  item._id.equals(productId));
            productDeleted.deleteOne();
            user.save();
            res.status(202).json({ user: user})
      }catch(err) {
            console.error('Err', err);
            res.status(500).json({message: 'Can not delete items in the cart.'})
      }
      
}
module.exports = cartDeleted;