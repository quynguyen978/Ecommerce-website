import { useNavigate, useLocation } from "react-router-dom";
import './MainNavigate.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io"; 
import { useSelector } from "react-redux";

function MainNavigate() {
      const navigate = useNavigate();
      const location = useLocation();
      const userName = useSelector((state) => state.loginUser.userName);
      console.log('user name for login ', userName);
      const isLoggedIn = useSelector ((state) => state.loginUser.isLoggedIn);

      const navigates = [
            { path: '/', title: 'Home', icon: null}, 
            { path: '/shop',title: 'Shop', icon: null },
            { path: '', title: 'BOUTIQUE', icon: null}, 
            { path: '/cart', title: 'Cart', icon: <FaShoppingCart style={{color: 'gray'}}/> }, 
            { path: isLoggedIn? '/profile' : '/login', title: isLoggedIn? userName: 'Login',icon: <IoMdPerson style={{color: 'gray'}}/>}];
            
// function to pass a path for navigate
const handleNavigate = (path) => {
      navigate(path);
}

      return (
            <header>
                  <nav>
                        <div className="d-flex justify-content-between nav-container">
                              <ul className="d-flex navigate-left">
                                    {navigates.slice(0, 2).map((navigate, index) => {
                                    return  <li key={index} 
                                    // adding active class to navigate item
                                                className={location.pathname === navigate.path ? 'active' : ''}
                                                
                                                onClick={()=> handleNavigate(navigate.path)}
                                            >
                                           {navigate.icon} {navigate.title}
                                          </li>
                                    })}
                              </ul>
                              <ul>
                                     <li className="navigate-shopeName">BOUTIQUE</li>
                              </ul>
                              <ul className="d-flex navigate-right">
                                     {navigates.slice(3).map((navigate, index) => {
                                    return  <li key={index} 
                                                className={location.pathname === navigate.path ? 'active' : ''}
                                                onClick={()=> handleNavigate(navigate.path)}
                                            >

                                        {navigate.icon}  {navigate.title}
                                    </li>
                                    })}
                              </ul>
                        </div>

                  </nav>
            </header>
      )
}
export default MainNavigate;
