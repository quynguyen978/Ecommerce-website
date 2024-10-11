import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../schemaForm/SignUpSchema";
import FormCustom from "../FormCustom/FormCustom";
import { onSubmit } from "../../submitFunction";

export default function FormSignUp({full_name, email, pass_word, phone, signUp}) {
      const { register, handleSubmit, formState: { errors }} = useForm({
            resolver: zodResolver(signUpSchema),
      });

      const navigate = useNavigate()
      // submit function
      const onSubmitForm = (data) => onSubmit(data, 'users', navigate);
      return (
            <div>
                  <FormCustom full_name={full_name} email={email} pass_word={pass_word} phone={phone} 
                  signUp={signUp} register={register} errors={errors} handleSubmit={handleSubmit(onSubmitForm)}/>
            </div>
      )
}