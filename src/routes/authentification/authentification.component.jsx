import SingUpForm from '../../components/sign-up/sign-up-form.component';
import SingInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentification.style.scss'

const Authentification = () => {
  return (
    <div className='authentification-container'>
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentification;