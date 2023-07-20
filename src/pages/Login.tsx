import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dispatch, fetchCurrencies, sendEmail } from '../redux/actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  isEmailValid: false,
  isPasswordValid: false,
};

function Login() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    switch (target.name) {
      case 'email':
        setFormData((prev) => ({
          ...prev,
          [target.name]: target.value,
          isEmailValid: (target.value.includes('@')
          && target.value.includes('.com')),
        }));
        break;
      case 'password':
        setFormData((prev) => ({
          ...prev,
          [target.name]: target.value,
          isPasswordValid: (target.value.length > 5),
        }));
        break;
      default:
        break;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(sendEmail(formData.email, formData.password));
    dispatch(fetchCurrencies());
    navigate('/carteira');
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        id="email"
        data-testid="email-input"
        onChange={ handleChange }
        value={ formData.email }
      />
      <input
        type="password"
        name="password"
        id="password"
        data-testid="password-input"
        onChange={ handleChange }
        value={ formData.password }
      />
      <button
        type="submit"
        disabled={ !(formData.isEmailValid && formData.isPasswordValid) }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
