
import Button from "../../../components/Button/Button";
import formatNumberWithDots from "../../../Utilities/formatNumberWithDot";

export default function CartPageTotal ({subTotal}) {
   
      return (
            <div className="p-4 fst-italic bg-body-secondary bg-opacity-50">
                  <p>CART TOTAL</p>
                  <div className="d-flex justify-content-between border-bottom">
                        <p className="mb-2">SUBTOTAL</p>
                        <p className="mb-2">{formatNumberWithDots(subTotal)} VND</p>
                  </div>
                  <div className="d-flex justify-content-between">
                        <p>TOTAL</p>
                        <p>{formatNumberWithDots(subTotal)} VND</p>
                  </div>
                  <div className="d-flex flex-column">
                        <input type="text" placeholder="Enter your coupon" className="p-2" />
                        <Button normalBtn giftIcon title='Apply counpon'/>
                  </div>
            </div>
      )
}