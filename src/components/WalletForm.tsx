import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from './Header';
import { ExpenseType } from '../types';
import { Dispatch, sendExpense } from '../redux/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
  exchangeRates: '',
};

function WalletForm() {
  const currencies = useSelector((state: RootState) => state.wallet.currencies);
  const id = useSelector((state: RootState) => state.wallet.expenses.length);
  const payMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const [formData, setFormData] = useState<ExpenseType>(INITIAL_STATE);
  const dispatch: Dispatch = useDispatch();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(sendExpense({ ...formData, id }));
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value"
            value={ formData.value }
            onChange={ handleChange }
            required
          />
        </label>
        <label>
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            value={ formData.currency }
            onChange={ handleSelect }
          >
            {currencies.map((currency) => {
              return (
                <option key={ currency } value={ currency }>{ currency }</option>
              );
            })}
          </select>
        </label>
        <label>
          Método de Pagamento:
          <select
            data-testid="method-input"
            name="method"
            value={ formData.method }
            onChange={ handleSelect }
          >
            {payMethod.map((item) => {
              return (
                <option key={ item } value={ item }>{ item }</option>
              );
            })}
          </select>
        </label>
        <label>
          Tag:
          <select
            data-testid="tag-input"
            name="tag"
            value={ formData.tag }
            onChange={ handleSelect }
          >
            {tags.map((item) => {
              return (
                <option key={ item } value={ item }>{ item }</option>
              );
            })}
          </select>
        </label>
        <label>
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ formData.description }
            onChange={ handleChange }
          />
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
