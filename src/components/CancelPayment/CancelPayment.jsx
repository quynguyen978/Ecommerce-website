import { FcCancel } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function CancelPayment() {
      const navigate = useNavigate();
      const continueShoppingHandle = () => {
            navigate('/cart')
      }
      return (
            <div className=" d-flex justify-content-between align-items-center m-2" style={{minHeight: '100vh'}}>
                  
                  <div className="card d-flex justify-content-between align-items-center m-auto shadow p-3 w-90 w-sm-90 w-md-80 " style={{ height: '40vh'}}>
                        <div className="card-body text-center">
                              <FcCancel style={{fontSize: '2rem'}}/>
                              <h4 className="m-4">The payment was canceled
                              </h4>                             
                              <button className="btn btn-danger mt-3" onClick={continueShoppingHandle}>Try again</button>
                        </div>
                  </div>
            </div>
      )
}