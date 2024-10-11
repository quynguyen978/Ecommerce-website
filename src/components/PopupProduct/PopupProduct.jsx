import Button from '../Button/Button'; 
import { useDispatch, useSelector } from 'react-redux';
import { show_popup, hide_popup } from '../../redux/popupProduct/PopupProductAction';
import './PopupProduct.css'

function PopupProduct ({products}) {
      const dispatch = useDispatch();
      const isOpen = useSelector((state) => state.popupProduct.isOpen);
      console.log('product', products)

      return (
            <>
                 {isOpen && <div className='product_overlay' onClick={() => dispatch(hide_popup())}>
                        <div className="PopupProduct_container">
                              <div className='popupProduct_grid'>
                                    <img src={products.img1} alt={products.name} className='popup_img' /> 
                                     <div className='popupProduct_item_decription pt-5 fst-italic'>
                                          <p className='fw-medium fs-5 m-0'>{products.name}</p>
                                          <p className='text-body-secondary mb-2'>{products.price}VND</p>
                                          <p className='text-body-tertiary mb-3 popupproduct_descrip_detail'>{products.short_desc}</p>
                                          <Button title='View Detail' cartIcon normalBtn/>
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