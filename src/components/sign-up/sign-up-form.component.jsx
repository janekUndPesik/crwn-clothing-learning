import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.style.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SingUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const reaetFormfields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
        alert("passwords do not match");
        return;
    }

    try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        await createUserDocumentFromAuth(user, { displayName });
        reaetFormfields();
    }
    catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert("Email already in use");
      }
      else {
        console.error(error);
      }
    }
  };

  const onChangeHandler = (event) => {
    const { name,value } = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return(
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required onChange={onChangeHandler}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required onChange={onChangeHandler}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required onChange={onChangeHandler}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm password'
          type='password'
          required onChange={onChangeHandler}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SingUpForm;