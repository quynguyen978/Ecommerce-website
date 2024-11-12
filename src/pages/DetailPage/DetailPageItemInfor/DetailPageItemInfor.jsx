import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Button from '../../../components/Button/Button';
import { countDown, countUp } from '../../../redux/CountItemproductDetail/countItemAction';
import formatNumberWithDot from '../../../Utilities/formatNumberWithDot';
import { handleAddToCart } from "./DetailPage_addToCart";
import './DetailPageItemInfor.css';

export default function DetailPageItemInfor ({selectProduct}) {
      const dispatch = useDispatch();
      // item_number is the amount that user wants to buy
      let item_number = useSelector((state) => state.countItem.item_number);
      const userId = useSelector((state) => state.loginUser.userId);

      // handle increase
      const handleIncrease = () => {
            dispatch(countUp());
      }

      // add current product to database
      const addToCartHandler = () => {
            handleAddToCart(userId, selectProduct, item_number);
          };
        
      // handle decrease
      const handleDecrease = () => {
            dispatch(countDown());
      } 

      // console.log('selected Produc', selectProduct)
      return (
            <div>
                 <p className='fs-1 fst-italic mt-4'>{selectProduct.name}</p>
                 <p className='fs-4 text-secondary'>{formatNumberWithDot(selectProduct.price)} VND</p>
                 <p>{selectProduct.short_desc}</p>
                 <div className='d-flex'>
                        <p className='fw-medium'>CATEGORY: </p>   
                        <p className='ms-2'>{selectProduct.category}</p>
                 </div>
                  <div className='detail_number_items'>
                        <input type="text" placeholder='QUANTITY'/>
                        <p className='m-0 d-flex align-items-center justify-content-center'>
                        <IoMdArrowDropleft className='arrow-icon' onClick={handleDecrease} /> {item_number} <IoMdArrowDropright className='arrow-icon' onClick={handleIncrease} />
                        </p>
                        <Button title='Add to cart' Italic normalBtn onClick={addToCartHandler} />
                  </div>
            </div>
      )
}