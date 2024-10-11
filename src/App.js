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
  ])

  return <RouterProvider router={router}/>
}

export default App;
