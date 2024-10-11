import { login_user } from "../redux/userLogin/userLoginAction";
export const onSubmit = async (data, endpointType, navigate, dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/${endpointType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    // console.log('user login issssssss', result.user._id);

    if (response.status === 200 || response.status === 201) {
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
      console.error(`${endpointType} failed:`, result.message);
    }
  } catch (err) {
    console.error(`Error during ${endpointType}:`, err);
  }
};
