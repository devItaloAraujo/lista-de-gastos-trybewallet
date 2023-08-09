// Coloque aqui suas actions

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../components/Header';
import { ExpenseType } from '../../types';

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;

export const sendEmail = (email: string, password: string) => ({
  type: 'SAVE_EMAIL',
  payload: { email, password },
});

export function requestSuccessful(currencies: string[]) {
  return {
    type: 'REQUEST_SUCCESSFUL',
    payload: currencies,
  };
}

export function fetchCurrencies() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data).filter((item) => item !== 'USDT');
      dispatch(requestSuccessful(currencies));
    } catch (error: any) {
      console.log(error);
    }
  };
}

export function requestSuccessful2(exchangeRates: any, expense: ExpenseType) {
  return {
    type: 'ADD_EXPENSE',
    payload: { ...expense, exchangeRates },
  };
}

export function sendExpense(expense: ExpenseType) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const exchangeRates = await response.json();
      dispatch(requestSuccessful2(exchangeRates, expense));
    } catch (error: any) {
      console.log(error);
    }
  };
}

export function removeExpense(id : number) {
  return {
    type: 'REMOVE_EXPENSE',
    payload: id,
  };
}
