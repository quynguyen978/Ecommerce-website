import { useNavigate } from "react-router-dom"
import formatNumberWithDots from "../../../Utilities/formatNumberWithDot"
import './DetailRelateProducts.css'

export default function DetailRelateProducts ({relateList}) {
      const navigate = useNavigate();

      // handle navigate when click relate items
      const handleRelateItem = (item) => {
            navigate(`/shop/detail/${item.name}`)
      }
      return (
            <div>
                  <h5 className="mt-5 mb-4 fst-italic ">RELATED PRODUCTS</h5>
                  <div className="relateProductContainer"> 
                        {relateList.map((item, index) => {
                              return <div key = {index} className="pb-5" onClick={() => handleRelateItem(item)}>
                                          <img src={item.img1} alt={item.name} />
                                          <p className="fw-medium">{item.name}</p>
                                          <p>{formatNumberWithDots(item.price)} VND</p>
                              </div>
                        })}
                  </div>
            </div>
      )
}