import HeadCustomerSupport from "./HeadCustomerSupport/HeadCustomerSupport";
import BodyCustomerSupport from "./BodyCustomerSupport/BodyCustomerSupport";
import './CustomerSupport.css';

export default function CustomerSupport() {
      return (
            <div className="customerSupportContainer">
                  <HeadCustomerSupport/>
                  <BodyCustomerSupport/>
            </div>
      )
}