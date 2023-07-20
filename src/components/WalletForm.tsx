import { useSelector } from 'react-redux';
import { RootState } from './Header';

function WalletForm() {
  const currencies = useSelector((state: RootState) => state.wallet.currencies);
  const payMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  return (
    <div>
      <form>
        <label>
          Valor:
          <input data-testid="value-input" type="number" />
        </label>
        <label>
          Moeda:
          <select data-testid="currency-input">
            {currencies.map((currency) => {
              return (
                <option key={ currency } value={ currency }>{ currency }</option>
              );
            })}
          </select>
        </label>
        <label>
          Método de Pagamento:
          <select data-testid="method-input">
            {payMethod.map((item) => {
              return (
                <option key={ item } value={ item }>{ item }</option>
              );
            })}
          </select>
        </label>
        <label>
          Tag:
          <select data-testid="tag-input">
            {tags.map((item) => {
              return (
                <option key={ item } value={ item }>{ item }</option>
              );
            })}
          </select>
        </label>
        <label>
          Descrição:
          <input data-testid="description-input" type="text" />
        </label>
      </form>
    </div>
  );
}

export default WalletForm;
