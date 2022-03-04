import { types } from '../theme/types';

export const themeReducer = (state = false, action) => {
  switch (action.type) {
    case types.toggle:
      return !state;

    default:
      return state;
  }
};
