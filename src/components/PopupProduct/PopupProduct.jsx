import Button from '../Button/Button'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { show_popup, hide_popup } from '../../redux/popupProduct/PopupProductAction';
import './PopupProduct.css'

function PopupProduct ({product}) {
      const dispatch = useDispatch();
      const isOpen = useSelector((state) => state.popupProduct.isOpen);
      const navigate = useNavigate();

      // view the item's detail
      const viewItemDetailHanle = () => {
            navigate(`/shop/detail/${product.name}`)
      }
      return (
            <>
                 {isOpen && <div className='product_overlay' onClick={() => dispatch(hide_popup())}>
                        <div className="PopupProduct_container">
                              <div className='popupProduct_grid'>
                                    <img src={product.img1} alt={product.name} className='popup_img' /> 
                                     <div className=' pt-5 fst-italic'>
                                          <p className='fw-medium fs-5 m-0'>{product.name}</p>
                                          <p className='text-body-secondary mb-2'>{product.price}VND</p>
                                          <p className='text-body-tertiary mb-3 popupproduct_descrip_detail'>{product.short_desc}</p>
                                          <Button title='View Detail' cartIcon normalBtn onClick = {viewItemDetailHanle}/>
                                    <button onClick={() => dispatch(hide_popup())} className='close_popup'>X</button>
                                    </div>
                               </div>
                        </div>
                  </div>
                  }
            </>
      )
}
export default PopupProduct;