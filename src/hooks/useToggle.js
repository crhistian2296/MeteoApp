import { useState } from 'react';

export const useToggle = () => {
  const [state, setState] = useState(false);

  const toggle = () => setState((initialState) => !initialState);

  return [state, toggle];
};
