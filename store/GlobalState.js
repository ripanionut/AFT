import { createContext } from 'react';
import reducers from './Reducers';
import { useReducer } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

  return <DataContext.Provider value={[state, dispatch]}>{children}</DataContext.Provider>;
};
