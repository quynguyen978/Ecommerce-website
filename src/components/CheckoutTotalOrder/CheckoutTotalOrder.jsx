import './CheckoutTotalOrder.css';

export default function CheckoutTotalOrder () {
      return (
            <div className="checkoutOderContainer">
                  <h5 className="mb-4">YOUR ORDER</h5>
                  <div className='checkoutItemDetail'>
                        <p className="fw-medium">Apple iPhone 11 64GB</p>
                        <div className='checkout_itemPrice'>
                              <p className="ms-4">4390000 VND</p>
                              <p className='ms-1'>x 1</p>
                        </div>
                  </div>
                  <div className='checkoutItemDetail'>
                        <p className="checkoutOrder_itemName fw-medium">Apple iPhone 11 64GB </p>
                        <div className='checkout_itemPrice'>
                              <p className="ms-4">4390000 VND</p>
                              <p className="ms-1"> x 1</p>
                        </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                        <p className='fw-bold'>TOTAL</p>
                        <p className=' fs-5'>19.779.000 VND</p>
                  </div>
            </div>
      )
}