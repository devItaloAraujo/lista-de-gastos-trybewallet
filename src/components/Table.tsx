import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Header';
import { removeExpense } from '../redux/actions';

function Table() {
  const header = ['Descrição',
    'Tag',
    'Método de pagamento',
    'Valor',
    'Moeda',
    'Câmbio utilizado',
    'Valor convertido',
    'Moeda de conversão',
    'Excluir'];

  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement;
    dispatch(removeExpense(parseInt(button.value, 10)));
  };

  return (
    <div>
      <table>
        <thead>
          { header.map((item) => <th key={ item }>{item}</th>)}
        </thead>
        <tbody>
          { expenses.map((item) => {
            const { id, description, tag, method, currency, exchangeRates, value } = item;
            const valueBRL = parseFloat(exchangeRates[currency].ask) * parseFloat(value);
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{parseFloat(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{valueBRL.toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    value={ id }
                    onClick={ handleClick }
                    data-testid="delete-btn"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
