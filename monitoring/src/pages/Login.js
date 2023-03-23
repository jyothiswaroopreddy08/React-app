import React from 'react';
import { useHistory } from 'react-router-dom';
//import axios from 'axios';
import { emailValidator, passwordValidator } from "../components/regexValidator";


const Login = () => {

  const history = useHistory();

  const [input, setInput] = React.useState({ email: '', password: '' });

  const [errorMessage, seterrorMessage] = React.useState({});
  const [successMessage, setsuccessMessage] = React.useState('');

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };


  const formSubmitter = (e) => {
    e.preventDefault()
    seterrorMessage({});
    if (!emailValidator(input.email)) {
      seterrorMessage({ ...errorMessage, emailerror: true })
      return;
    }
    if (!passwordValidator(input.password)) {
      seterrorMessage({ ...errorMessage, passworderror: true });
      return;
    }

    history.push('/dashboard');

  };


  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-form-title" style={{ backgroundImage: 'url(images/bg-01.jpg)' }}>

            </div>

            <form className="login100-form validate-form" onSubmit={formSubmitter}>

              <div className="wrap-input100 validate-input m-b-10" data-validate="email is required">


                <span className="label-input100">email</span>
                <input className="input100" type="text" name="email" placeholder="Type your email yes" onChange={handleChange} />
                <span className="focus-input100" />

              </div>
              {errorMessage.emailerror ? <span className='error'>Please enter valid email</span> : ''}

              <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="password" placeholder="Enter password" onChange={handleChange} />

                <span className="focus-input100" />
              </div>
              {errorMessage.passworderror ? <span className='error'>Please enter valid password</span> : ''}
              <div className="flex-sb-m w-full p-b-30">
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="" className="txt1">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="container-login100-form-btn">

                <input type="submit" className="login100-form-btn" value="Login" />

              </div>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Login;


