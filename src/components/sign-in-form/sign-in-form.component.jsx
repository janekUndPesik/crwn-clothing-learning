import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './sign-in-form.style.scss';

const defaultFormFields = {
  email: '',
  password: ''
};

const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormfields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormfields();
    }
    catch(error) {
      if (error.code === 'auth/invalid-credential') {
        alert('Wrong password or email');
      }
      console.log(error);
    }
  };

  const onChangeHandler = (event) => {
    const { name,value } = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return(
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SingInForm;