import React, { useState, useContext, Fragment } from 'react';

import Input from '../shared/form/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../util/validation';
import { useForm } from '../hooks/formhook';
import { AuthContext } from '../shared/context/Auth-Context';
import ErrorModal from '../shared/UI/ErrorModal';
import '../sass/_base.scss'

const Auth = () => {
  const auth = useContext(AuthContext);
  const [error, setError] = useState();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const authSubmitHandler = async event => {
    event.preventDefault();

      try{
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          })
        });
        const responseData = await response.json();
        if(!response.ok){
          throw new Error(responseData.message);
        }
        auth.login(responseData.userId, responseData.token);
      }catch(err){
        setError(err.message|| 'something went not ok');
      } 
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      <form className="add-student-form" onSubmit={authSubmitHandler}>
        <h2>Login Required</h2>
        <hr />
        <Input
          placeholder = "email"
          className = "add-student-form__input"
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          placeholder = "password"
          className = "add-student-form__input"
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password, at least 6 characters."
          onInput={inputHandler}
        />
        <button className= "add-student-form__button" type="submit" disabled={!formState.isValid}>sign in</button>
      </form>
      </Fragment>
  );
};

export default Auth;
