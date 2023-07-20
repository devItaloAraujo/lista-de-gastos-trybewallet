import { useSelector } from 'react-redux';

export type RootState = {
  user:{
    email: string;
    password: string;
  }
  wallet:{
    currencies: string[];
  }
};

export function Header() {
  const email = useSelector((state: RootState) => state.user.email);
  return (
    <div>
      <h3 data-testid="email-field">
        Email:
        {' '}
        { email }
      </h3>
      <h3 data-testid="total-field">
        Total:
        {' '}
        { 0 }
      </h3>
      <h3 data-testid="header-currency-field">
        BRL
      </h3>
    </div>
  );
}
