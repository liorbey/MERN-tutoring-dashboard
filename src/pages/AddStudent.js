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
        <form className="add-student-form" onSubmit={placeSubmitHandler}>
        <Input
          className = "add-student-form__input"
          id="name"
          placeholder = "name"
          element="input"
          type="text"
          label="name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid name."
          onInput={inputHandler}
        />
        <Input
          className = "add-student-form__input"
          id="level"
          placeholder="level"
          element="input"
          label="level"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid level"
          onInput={inputHandler}
        />
        <Input
          className = "add-student-form__input"
          id="address"
          placeholder="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address."
          onInput={inputHandler}
        />
        <Input
          className = "add-student-form__input"
          id="description"
          placeholder="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />
        <button  className = "add-student-form__button" type="submit" disabled={!formState.isValid}>
          Add Student
        </button>
      </form>
    );
};
export default AddStudent;