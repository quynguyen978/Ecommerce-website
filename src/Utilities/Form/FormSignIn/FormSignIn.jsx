import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSchema } from '../../schemaForm/SignInSchema';
import FormCustom from '../FormCustom/FormCustom';
import { onSubmit } from '../../submitFunction';

export default function FormSignIn ({email, passWord}) {
      const { register, handleSubmit, formState: { errors }} = useForm({
                  resolver : zodResolver(signInSchema),
      });

      // navigate to home page when user log in
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const onSubmitForm =(data) => onSubmit(data, 'login', navigate, dispatch);
      return (
            <div>
                  <FormCustom email={email} pass_word= {passWord} register= {register} errors= {errors} handleSubmit={handleSubmit(onSubmitForm)}/>
            </div>
      )
}