const User = require('../../models/User');
const Product = require('../../models/Product');

// Add product to the user's cart
const addToCart = async (req, res) => {
    const { userId, productName, productImg, productPrice, productCategory, proQuantity } = req.body;
    try {
		let product = await Product.findOne({name: productName});
		// create product in database
		if ( !product ){
		product = new Product({
			name: productName,
			image: productImg,
			price: productPrice,
			category: productCategory,
			quantity: proQuantity,
			user: userId,
		})
		await product.save();
		}
		else {
		product.quantity += proQuantity; 
		await product.save();
		}

		// add product to user
		const user = await User.findById(userId).populate('cart.product');
		if( !user ) {
		console.error('User not found');
		return res.status(404).json({ message: 'User not found' });
		}

		// dertermine the product is exist or not
		const productInCart = user.cart.find(item =>  item.product._id.equals(product._id));   
		
		if( !productInCart ) {
		user.cart.push({product: product._id, name: productName, image: productImg, price: productPrice, quantity: proQuantity});
		}
		else {
		productInCart.quantity += proQuantity;
		}
		await user.save();

		// check
		console.log('Product added/updated in cart:', productInCart);
		res.status(200).json({ message: 'Product added to cart successfully' });
		}
    catch(err) {
        console.error('Err', err);
        res.status(500).json({ message: 'Can not add product to the cart' });
    }
};

module.exports = addToCart;
