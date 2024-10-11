import { Link } from "react-router-dom";
import bannerImg from '../../Resource Assignment 03/banner1.jpg';
import FormSignIn from '../../Utilities/Form/FormSignIn/FormSignIn';

function LoginPage() {
      return (
            <div>
                  <img src={bannerImg} alt="banner img" className="SignUpimg"/>
            <div className="signUpContainer">
                  <p className="SignUp_header">Sign In</p>
                  <FormSignIn email passWord/>
                  <p className="text-center mt-5">Create an account?
                             <Link to='/register' className="text-decoration-none"> Sign up </Link>
                  </p>
            </div>
            </div>
      )
}
export default LoginPage;