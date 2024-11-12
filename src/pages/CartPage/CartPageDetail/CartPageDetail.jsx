import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import CartPageDetailBottom from "./CartPageDetailBottom/CartPageDetailBottom";
import formatNumberWithDots from "./../../../Utilities/formatNumberWithDot";
import { fetchCartData } from "../../../Utilities/fetUserCart";
import { url } from '../../../Utilities/url';



const head_titles = ['IMAGE', 'PRODUCT', 'PRICE', 'QUANTITY', 'TOTAL', 'REMOVE'];

export default function CartPageDetail({userId, subTotal}) {
      const dispatch = useDispatch();
    const cartUserItems = useSelector((state) => state.fetchUserCart.userCart);
    const [cartItems, setCartItems] = useState([]);    

      // call api
      useEffect(() => {
          if(userId) {
                  dispatch(fetchCartData(userId));
            }
      }, [userId, dispatch]);

      // set value for cartItems
      useEffect(()=> {
            if(cartUserItems && cartUserItems.cart) {
                  setCartItems(cartUserItems.cart);
            }
      }, [cartUserItems]);

      // deleted item
    const deletedCartItemHandle = async (item) => {
        try {
            const body = {
                userId: userId,
                productId: item._id,
            };
            // send the product infor to backend to remove from database
            const response = await fetch(`${url}/cart/deleted`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                // Remove the item locally after a successful deletion response
                setCartItems((prev) => prev.filter((cartItem) => cartItem._id !== item._id));
                dispatch(fetchCartData(userId));
            } else {
                console.error('Failed to delete item.');
            }
        } catch (err) {
            console.error('Error deleting item:', err);
        }
    };

      // increase handle click
      const increaseHandle = async (item, index) => {
           const updateCartItems = cartItems.map((cartItem, i) => {
            if(index === i) 
                  return {...cartItem, quantity: cartItem.quantity +1};
            return cartItem
           })
           setCartItems(updateCartItems);

           try {
            const body = {
                  userId: userId,
                  productId: item._id,
                  quantity: item.quantity + 1,
            };
            const response = await fetch(`${url}/cart/updated`, {
                  method: 'POST',
                  body: JSON.stringify(body),
                  headers: { 'Content-Type': 'application/json '},
            });

            if( response.ok ){
                  dispatch(fetchCartData(userId));
                  console.log('updated completly. response value', response);
            }
           }catch(err) {
            console.error('Cannot send update cart data to backend');
           }
      }

      // decrease handle click
      const decreaseHandle = async (item, index) => {
            const updateCartItems = cartItems.map((cartItem, i) => {
                  if(index === i && cartItem.quantity > 1)
                        return {...cartItem, quantity: cartItem.quantity - 1};
                  else if(index === i && cartItem.quantity <= 1)  return {...cartItem, quantity: 1};
                  return cartItem;
            }
      );
          setCartItems(updateCartItems);  

          try {
            const body = {
                  userId: userId,
                  productId: item._id,
                  quantity: item.quantity <= 1 ? 1 : item.quantity -1,
            };
            const response = await fetch(`${url}/cart/updated`, {
                  method: 'POST',
                  body: JSON.stringify(body),
                  headers: { 'Content-Type': 'application/json '},
            });

            if( response.ok ){
                  dispatch(fetchCartData(userId));
                  console.log('updated completly. response value', response);
            }
           }catch(err) {
            console.error('Cannot send update cart data to backend');
           }
      }
    return (
        <div className="row mb-4">
            {head_titles.map((title, index) => (
                <div key={index} className="col-2 bg-body-secondary bg-opacity-50 p-3 fst-italic fw-medium text-center">
                    {title}
                </div>
            ))}
            <div>
                  
            {cartItems.length > 0  ? (
        cartItems.map((item, index) => (
            <div key={index} className="row align-items-center text-center mb-3">
                <div className="col-2">
                    <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-2 fw-medium">
                    {item.name}
                </div>
                <div className="col-2">
                    {formatNumberWithDots(item.price)} VND
                </div>
                <div className="col-2">
                    <IoMdArrowDropleft className='arrow-icon' onClick={() => decreaseHandle(item, index)} /> {item.quantity} <IoMdArrowDropright className='arrow-icon' onClick={() => increaseHandle(item, index)}/>
                </div>
                <div className="col-2">
                    {formatNumberWithDots(item.quantity * item.price)} VND
                </div>
                <div className="col-2">
                    <IoTrashOutline onClick={() => deletedCartItemHandle(item)} style={{ cursor: 'pointer' }} />
                </div>
            </div>
        ))
    ) : ''}
            </div>
            <div className="p-0">
                <CartPageDetailBottom subTotal = {subTotal}/>
            </div>
        </div>
    );
}
