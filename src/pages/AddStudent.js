import React from 'react';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../util/validation';
import { useForm } from '../hooks/formhook';
import Input from '../form/Input';

const AddStudent = () =>{
    const [formState, inputHandler] = useForm(
        {
          name: {
            value: '',
            isValid: false
          },
          level: {
            value: '',
            isValid: false
          },
          address: {
            value: '',
            isValid: false
          },
          description:{
            value: '',
            isValid: false
          }
        },
        false
      );
    
      const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
      };
    return(
        <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="name"
          element="input"
          type="text"
          label="name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid name."
          onInput={inputHandler}
        />
        <Input
          id="level"
          element="textarea"
          label="level"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid level"
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address."
          onInput={inputHandler}
        />
        <button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </button>
      </form>
    );
};
export default AddStudent;