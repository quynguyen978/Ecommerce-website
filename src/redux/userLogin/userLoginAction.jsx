// action type
export const LOGIN_USER = 'LOGIN USER';
export const LOGOUT_USER = 'LOGOUT USER';

// action creator
export const login_user = (userName, userId) => {
      return {
          type: LOGIN_USER,
          payload: { userName, userId },
      };
  };

export const logout_user = () => ({
      type: LOGOUT_USER,
      
})