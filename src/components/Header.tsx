import { useSelector } from 'react-redux';
import { ExpenseType } from '../types';

export type RootState = {
  user:{
    email: string;
    password: string;
  }
  wallet:{
    currencies: string[];
    expenses: ExpenseType[];
  }
};

export function Header() {
  const email = useSelector((state: RootState) => state.user.email);

  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  const expensesBRL = expenses.map((item) => {
    return (
      parseFloat(item.value) * parseFloat(item.exchangeRates[item.currency].ask)
    );
  });

  const total = expensesBRL.reduce((acc, item) => acc + item, 0);

  return (
    <div>
      <h3 data-testid="email-field">
        Email:
        {' '}
        { email }
      </h3>
      <h3>
        Total:
        {' '}
      </h3>
      <h3 data-testid="total-field">
        { total.toFixed(2) }
      </h3>
      <h3 data-testid="header-currency-field">
        BRL
      </h3>
    </div>
  );
}
