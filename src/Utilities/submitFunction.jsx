import { login_user } from "../redux/userLogin/userLoginAction";
import { url } from '../Utilities/url';

export const onSubmit = async (data, endpointType, navigate, dispatch) => {
  try {
    const response = await fetch(`${url}/${endpointType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('result call api', result);

    if (response.ok) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('userId', result.user._id);
      localStorage.setItem('userName', result.user.fullName);
      // console.log(`${endpointType} successful:`, result);
      switch(endpointType) {
        case 'users':
          return navigate('/login');
        case 'login':
          dispatch(login_user(result.user.fullName, result.user._id));
          return navigate('/');
        default: return navigate('/');
      };
    }
     else {
      alert('Account is not match.');
      console.error(`${endpointType} failed:`, result.message);
    }
  } catch (err) {
    console.error(`Error during ${endpointType}:`, err);
  }
};
