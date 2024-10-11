// adding current product to database
export const handleAddToCart = async (userId, selectProduct, item_number) => {
      try {
            const sendProductData = {
                  userId,
                  productName: selectProduct.name,
                  productImg: selectProduct.img1,
                  productPrice: selectProduct.price,
                  productCategory: selectProduct.category,
                  proQuantity: item_number,
            }
            const response = await fetch(`http://localhost:5000/products`, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(sendProductData),
            });

            // Handle the response
            if( response.ok ) {
                  const result = await response.json();
                  console.log('Product added to cart:', result);
            }
            else {
                  console.error('Failed to add product to cart:', response.statusText);
            }
      }
      catch(err) {
            console.error('Error adding product to cart:', err);
      }
}