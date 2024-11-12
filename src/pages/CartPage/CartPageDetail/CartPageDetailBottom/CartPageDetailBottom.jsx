import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export default function CartPageDetailBottom ({subTotal}) {
      const navigate = useNavigate();

      const continueShoppingHanle = () => {
            navigate('/shop');
      }

      const checkoutHandle = () => {
            navigate('/checkout', {state: {subTotal}});
      }
      return (
            <div className="p-2 d-flex justify-content-between fst-italic p-3 bg-body-secondary bg-opacity-50">
                  <div className="d-flex align-items-center" style={{cursor: 'pointer'}} onClick={continueShoppingHanle}>
                        <FaArrowLeftLong />
                        <p className="m-0 ps-2">Continue shopping</p>
                  </div>
                  <div className="d-flex py-2 px-3 align-items-center border border-black border-2" style={{cursor: 'pointer'}} onClick={checkoutHandle}>
                        <p className="m-0 pe-2">Procees to checkout</p>
                        <FaArrowRightLong />
                  </div>
            </div>
      )
}