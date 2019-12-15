import React from 'react';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../util/validation';
import { useForm } from '../hooks/formhook';
import Button from '../form/Button';
import Input from '../form/Input';

const AddStudent = () =>{
    const [formState, inputHandler] = useForm(
        {
          title: {
            value: '',
            isValid: false
          },
          description: {
            value: '',
            isValid: false
          },
          address: {
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
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
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
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
    );
};
export default AddStudent;