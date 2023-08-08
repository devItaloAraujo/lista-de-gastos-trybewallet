import { useSelector } from 'react-redux';
import { RootState } from './Header';

function Table() {
  const header = ['Descrição',
    'Tag',
    'Método de pagamento',
    'Valor',
    'Moeda',
    'Câmbio utilizado',
    'Valor convertido',
    'Moeda de conversão',
    'Editar/Excluir'];

  const expenses = useSelector((state: RootState) => state.wallet.expenses);

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
                <td>{0}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
