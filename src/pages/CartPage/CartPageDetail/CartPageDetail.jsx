import CartPageDetailBottom from "./CartPageDetailBottom/CartPageDetailBottom";

const head_titles = ['IMAGE', 'PRODUCT', 'PRICE', 'QUANTITY', 'TOTAL', 'REMOVE'];

export default function CartPageDetail () {
      return (
            <div className="cartPageDetailContainer row">
                
                  {head_titles.map((title, index) => {
                       return <div key= {index} className="col-2 bg-body-secondary bg-opacity-50 p-3 fst-italic fw-medium">
                              {title}
                        </div>
                  } )}
                  <div className="p-0">
                  <CartPageDetailBottom/>
                  </div>
            </div>
      )
}