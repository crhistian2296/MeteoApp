import { useState } from 'react';

export const useToggle = (initialState) => {
  const [state, setState] = useState((initialState = false));

  const toggle = () => setState((initialState) => !initialState);

  return [state, toggle];
};
