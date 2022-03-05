import { types } from '../types/types';

export const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.send:
      return { ...state, [action.name]: action.payload };

    default:
      return state;
  }
};
