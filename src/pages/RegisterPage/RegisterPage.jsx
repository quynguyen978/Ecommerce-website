
import { Link } from "react-router-dom";
import FormSignUp from "../../Utilities/Form/FormSignUp/FormSignUp";
import bannerImg from '../../Resource Assignment 03/banner1.jpg';
import './RegisterPage.css';


export default function RegisterPage() {
      
      return (
            <>
            <img src={bannerImg} alt="banner img" className="SignUpimg"/>
            <div className="signUpContainer">
                  <p className="SignUp_header">Sign Up</p>
                  <FormSignUp full_name email pass_word phone signUp register errors handleSubmit/>
                  <p className="text-center mt-5">Login?
                             <Link to='/login' className="text-decoration-none"> Click </Link>
                  </p>
            </div>
            </>
      )
}
