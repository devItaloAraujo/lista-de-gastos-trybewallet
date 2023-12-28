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
      <h2 data-testid="email-field">
        Email:
        {' '}
        { email }
      </h2>
      <div className="total">
        <h3>
          Total:
          {' '}
          { total.toFixed(2) }
          {' '}
          BRL
        </h3>
      </div>
    </div>
  );
}
