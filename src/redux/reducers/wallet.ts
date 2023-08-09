// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { ExpenseType } from '../../types';

const INITIAL_STATE = {
  currencies: [],
  expenses: [] as ExpenseType[],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'REQUEST_SUCCESSFUL':
      return {
        ...state, currencies: action.payload,
      };
    case 'ADD_EXPENSE':
      return {
        ...state, expenses: [...state.expenses, action.payload],
      };
    case 'REMOVE_EXPENSE':
      return {
        ...state, expenses: state.expenses.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default wallet;
