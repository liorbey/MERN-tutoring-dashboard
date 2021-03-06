import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../util/validation';
import { useForm } from '../hooks/formhook';
import Input from '../shared/form/Input';
import { AuthContext } from '../shared/context/Auth-Context';


const AddStudent = () =>{
  const auth = useContext(AuthContext);
  const [error, setError] = useState();
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
          subject: {
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
      
      const history = useHistory();
    
      const placeSubmitHandler = async event => {
        event.preventDefault();
        try{
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/students`, {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + auth.token
            },
            body: JSON.stringify({
              name: formState.inputs.name.value,
              level: formState.inputs.level.value,
              subject: formState.inputs.subject.value,
              address: formState.inputs.address.value,
              description: formState.inputs.description.value
            }),
          });
          const responseData = await response.json();
          if(!response.ok){
            throw new Error(responseData.message);
          }
          history.push('/stats');
        }catch(err){
          setError(err.message|| 'something went not ok');
        }
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
          validators={[VALIDATOR_MINLENGTH(3)]}
          errorText="Pick an expertise level out of 10"
          onInput={inputHandler}
        />
        <Input
          className = "add-student-form__input"
          id="subject"
          placeholder="subject being tutored in"
          element="input"
          label="subject"
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
          validators={[VALIDATOR_MINLENGTH(5)]}
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