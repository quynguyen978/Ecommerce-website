import formatNumberWithDots from "../../../Utilities/formatNumberWithDot"
import './DetailRelateProducts.css'

export default function DetailRelateProducts ({relateList}) {
      return (
            <div>
                  <h5 className="mt-5 mb-4 fst-italic ">RELATED PRODUCTS</h5>
                  <div className="relateProductContainer"> 
                        {relateList.map((item, index) => {
                              return <div key = {index} className="pb-5">
                                          <img src={item.img1} alt={item.name} />
                                          <p>{item.name}</p>
                                          <p>{formatNumberWithDots(item.price)} VND</p>
                              </div>
                        })}
                  </div>
            </div>
      )
}