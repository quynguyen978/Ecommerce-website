import './FormCustom.css';

export default function FormCustom ({full_name, email, pass_word, phone, signUp, register, errors, handleSubmit}) {
      return (
            <form onSubmit={handleSubmit} className="SignupForm" >
                  <div className="SignUpForm_input">
                      {full_name && <div className="form-group">
                              <input type="text"
                              {...register('full_name')} placeholder="Full Name"/>
                              {errors.full_name && <p className="text-danger">{errors.full_name.message}</p>}
                        </div> }
                        
                       {email && <div className="form-group">
                              <input type="text"
                              {...register('email')} placeholder="Email"/>
                              {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div> }

                        { pass_word && <div className="form-group">
                              <input type="text"
                              {...register('passWord')} placeholder="Password"/>
                              {errors.passWord && <p className="text-danger">{errors.passWord.message}</p>}
                        </div> }

                        { phone && <div className="form-group">
                              <input type="text"
                              {...register('phone')} placeholder="Phone"/>
                              {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                        </div> }

                  </div>
                        <button type='submit' className="SignUpBtn">{ signUp ? 'SIGN UP' : 'SIGN IN' }</button>
                  </form>
      )
}