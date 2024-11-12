import { LOGIN_USER, LOGOUT_USER } from "./userLoginAction";
// initial state
const initialState = {
      userName: '',
      userId: null,
      isLoggedIn: false, // check if the user is logged in
};

export const login_reducer = (state = initialState, action) =>{
      switch(action.type) {
            case LOGIN_USER:
                  return {
                        ...state, 
                        userName: action.payload.userName,
                        userId: action.payload.userId,
                        isLoggedIn: true,
                  };
            case LOGOUT_USER:
                  return {
                        ...state,
                        userName: '',
                        userId: null,
                        isLoggedIn: false,
                  }
            default:
                  return state;
      }
}