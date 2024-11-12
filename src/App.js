import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CustomerSupport from "./components/Custommer Support/CustomerSupport";
import SuccessPayment from "./components/SuccessPayment/SuccessPayment";
import CancelPayment from "./components/CancelPayment/CancelPayment";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login_user } from "./redux/userLogin/userLoginAction";
import { jwtDecode } from 'jwt-decode';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        { path: '/', element: <HomePage/> },
        { path: 'shop', element: <Outlet/>,children:[
          { index:true, element: <ShopPage/>},
          { path: 'detail/:id', element: <DetailPage/>},

        ]},
        { path: 'cart', element: <CartPage/>, },
        { path: 'checkout', element: <CheckoutPage/>},
        { path: 'login', element: <LoginPage/> },
        { path: 'support', element: <CustomerSupport/>},
      ]
    },
    { path: 'register', element: <RegisterPage/>},
   
      { path: 'payment-success', element: <SuccessPayment/>},
      { path: 'payment-cancel', element:<CancelPayment/>},
  
  ])

  const dispatch = useDispatch();
  
  // get data from localstorage to keep user information after refreshing the page
  const isTokenExpired = (token) => {
    if (!token) return true; // No token means expired
  
    const decoded = jwtDecode(token); // Decode the JWT token
    const currentTime = Date.now() / 1000; // Get current time in seconds
  
    return decoded.exp < currentTime; // Check if the token is expired
  };
  
  // In your useEffect hook:
  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) {
      localStorage.removeItem('token');
    }
  
    if (token && !isTokenExpired(token)) {
      const userName = localStorage.getItem('userName');
      const userId = localStorage.getItem('userId');
  
      // If the token is valid, log the user in
      dispatch(login_user(userName, userId));
    } else {
      // If the token is expired, clear user data and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
      // navigate('/login');
    }
  }, [dispatch]);

  return <RouterProvider router={router}/>
}

export default App;
