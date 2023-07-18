// Esse reducer será responsável por tratar as informações da pessoa usuária

import { AnyAction } from 'redux';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'SAVE_EMAIL':
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default user;
