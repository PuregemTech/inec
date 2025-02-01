import React from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useNavigate} from 'react-router-dom';
import Image from '../../images/home-img.svg';
import Logo from '../../images/logo.jpg';
import './login.css';
//import Input from '../../components/input';
import {schema} from '../../schema';
const Login = () => {
  const navigate = useNavigate ();

  const {register, handleSubmit, formState: {errors}} = useForm ({
    resolver: joiResolver (schema),
  });

  const onSubmit = data => {
    console.log (data);
    navigate ('/dashboard');
  };

  return (
    <React.Fragment>
      <div className="login__container">
        <div className="img__container">
          <img src={Image} alt="Login" />
        </div>
        <div className="login__content">
          {/* <div className="login__cont"> */}
          <h1>Welcome Back</h1>
          <h2>Please enter your details</h2>
          <img src={Logo} alt="Logo" />
          <form onSubmit={handleSubmit (onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                {...register ('email')}
                name="email"
                type="email"
                className="form-control_"
                placeholder="Enter your email"
              />
              {/* <Input name="email" type="email" placeholder="Enter your email" /> */}
              {errors.email &&
                <p className="alert_">
                  {errors.email.message}
                </p>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                {...register ('password')}
                name="password"
                type="password"
                className="form-control_"
                placeholder="Enter your password"
              />
              {/* <Input
                name="password"
                type="password"
                placeholder="Enter your password"
              /> */}
              {errors.password &&
                <p className="alert_">{errors.password.message}</p>}
            </div>

            <button className="btnn">
              {' '}
              Sign In
            </button>

            <h1>INEC Security Alert System</h1>

          </form>
          {/* </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
