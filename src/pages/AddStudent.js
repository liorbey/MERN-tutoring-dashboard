import React from 'react';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../util/validation';
import { useForm } from '../hooks/formhook';
import Input from '../shared/form/Input';

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
        <h1>Add Student Form</h1>
        <Input
          className = "add-student-form__input"
          id="name"
          placeholder = "name"
          element="input"
          type="text"
          label="name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="That's not a valid name.."
          onInput={inputHandler}
        />
        <Input
          className = "add-student-form__input"
          id="level"
          placeholder="level"
          element="input"
          label="level"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Pick from Math, Robotics, Python, & Web Development"
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
          validators={[VALIDATOR_MINLENGTH(100)]}
          errorText="Please enter a valid description, try to be concise about enthusiasm, skill, etc. (100 characters minimum)"
          onInput={inputHandler}
        />
        <button  className = "add-student-form__button" type="submit" disabled={!formState.isValid}>
          Add Student
        </button>
      </form>
    );
};
export default AddStudent;