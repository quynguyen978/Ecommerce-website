import { useNavigate, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdPerson } from "react-icons/io"; 
import { useSelector } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
import './MainNavigate.css';
import { logout_user } from "../../redux/userLogin/userLoginAction";

function MainNavigate() {
    const [ visibleDropdown, setVisibleDropdown ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const userName = useSelector((state) => state.loginUser.userName);
    const isLoggedIn = useSelector ((state) => state.loginUser.isLoggedIn);
    const loginPath = '/login';
      const navigates = [
            { path: '/', title: 'Home', icon: null}, 
            { path: '/shop',title: 'Shop', icon: null },
            { path: '', title: 'BOUTIQUE', icon: null}, 
            { path: '/cart', title: 'Cart', icon: <FaShoppingCart style={{color: 'gray'}}/> }, 
            // { path: isLoggedIn? '/profile' : '/login', title: isLoggedIn? userName: 'Login',icon: <IoMdPerson style={{color: 'gray'}}/>}
        ];
            

// Redirect to Home after refreshing the page
useEffect(() => {
      if (location.pathname !== '/' && location.pathname !== 'login') {
      //     navigate('/');
      }
  }, []);

  const handleLogout = () => {
    dispatch(logout_user());
    navigate('/login');
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
  }

// function to pass a path for navigate
const handleNavigate = (path) => {
      navigate(path);
}

// show dropdown when username will be hovered
const handleMouseEnter = () => {
    setVisibleDropdown(true);
}

// hide dropdown on mouse leave
const handleMouseLeave = () => {
    setVisibleDropdown(false);
}
      return (
            <header>
                  <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"  id = 'navbarMenu'>
                              <div className="d-flex flex-column flex-sm-column flex-md-row justify-content-between justify-conten-sm-start nav-container">
                                    <ul className="d-flex flex-column flex-sm-column flex-md-row justify-conten-sm-start navigate-left">
                                          {navigates.slice(0, 2).map((navigate, index) => {
                                          return  <li key={index} 
                                          // adding active class to navigate item
                                          className={location.pathname === '/' && navigate.path === '/' ? 'active' : location.pathname === navigate.path ? 'active' : ''}                                                
                                                      onClick={()=> handleNavigate(navigate.path)}
                                                >
                                                {navigate.icon} {navigate.title}
                                                </li>
                                          })}
                                    </ul>
                                    <ul className="d-flex flex-column mb-3 p-0">
                                          <li className="navigate-shopeName ">BOUTIQUE</li>
                                    </ul>
                                    <ul className="d-flex flex-column flex-md-row flex-sm-column justify-conten-sm-start navigate-right">
                                          {navigates.slice(3).map((navigate, index) => {
                                          return  <li key={index} 
                                                      className={location.pathname === navigate.path ? 'active' : ''}
                                                      onClick={()=> handleNavigate(navigate.path)}
                                                >
                                          {navigate.icon}  {navigate.title}
                                          
                                          </li>
                                          })} 
                                          { isLoggedIn ? <li 
                                                      onMouseEnter={handleMouseEnter}
                                                      onMouseLeave={handleMouseLeave}
                                                      >
                                                      <IoMdPerson style={{color: 'gray'}}/> {userName}<MdArrowDropDown />

                                                      {visibleDropdown && 
                                                                  <ul class="dropdown-menu" style={{display: visibleDropdown ? 'block' : 'none'}}>
                                                                        <li class="dropdown-item" onClick={handleLogout}>Logout</li>
                                                                        <li class="dropdown-item"> Orders history</li>
                                                                  </ul>
                                                      }
                                                      </li> 
                                                      :  <li 
                                                      className={location.pathname === loginPath ? 'active' : ''}
                                                      onClick={()=> handleNavigate(loginPath)}
                                                      >
                                                      <IoMdPerson style={{color: 'gray'}}/> Login
                                          
                                                      </li> }
                                    </ul>
                              </div>
                        </div>

                  </nav>
            </header>
      )
}
export default MainNavigate;
