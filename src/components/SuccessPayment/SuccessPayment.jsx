import { FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SuccessPayment() {
      const navigate = useNavigate();
      const continueShoppingHandle = () => {
            navigate('/shop')
      }
      return (
            <div className=" d-flex justify-content-between align-items-center m-2" style={{minHeight: '100vh'}}>
                  
                  <div className="card d-flex justify-content-between align-items-center m-auto shadow p-3 w-80 w-sm-80 w-md-70" style={{ height: '40vh'}}>
                        <div className="card-body text-center">
                              <span className=" p-2 bg-success border border-success rounded-circle text-white d-inline-flex">
                              <FaDollarSign/>
                              </span>
                              <div className="m-4">
                              <h4 >Payment Successful</h4>
                              <p>Thank you for your payment!</p>
                              </div>
                              <button className="btn btn-success mt-3" onClick={continueShoppingHandle}>Continue Shopping</button>
                        </div>
                  </div>
            </div>
      )
}