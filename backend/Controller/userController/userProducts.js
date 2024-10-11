const User = require('../../models/User');
const Product = require('../../models/Product');

// Add product to the user's cart
const addToCart = async (req, res) => {
    const { userId, productName, productImg, productPrice, productCategory, proQuantity } = req.body;
    
    try {
        // Find user
        const user = await User.findById(userId).populate('cart.product');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if product exists in the database
        let product = await Product.findOne({ name: productName });
        
        if (!product) {
            // If the product does not exist, create a new one
            product = new Product({
                name: productName,
                image: productImg,
                price: productPrice,
                category: productCategory,
                quantity: proQuantity, // Quantity that user wants to buy
                user: userId,
            });
            await product.save();
        } else {
            // If product already exists, update the quantity
            product.quantity += proQuantity;
            await product.save();
        }

        // Check if the product is already in the user's cart
        const productInCart = user.cart.find((p) => p.product._id.equals(product._id));
        if (!productInCart) {
            // If the product is not in the cart, add it
            user.cart.push({ product: product._id, quantity: proQuantity });
        } else {
            // If the product is already in the cart, update the quantity
            productInCart.quantity += proQuantity;
        }

        // Save the updated user
        await user.save();
        res.status(200).json({ message: 'Product added to cart', cart: user.cart });

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Cannot add product to cart' });
    }
};

module.exports = addToCart;
