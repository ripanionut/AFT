import reducers from './Reducers';
import { useReducer, useEffect, createContext } from 'react';
import { getData } from '../utils/fetchData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

  const { auth } = state 

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      getData('/accessToken').then((res) => {
        if (res.err) return localStorage.removeItem('firstLogin');
        dispatch({
          type: 'AUTH',
          payload: {
            token: res.access_token,
            user: res.user
          }
        });
      });
    }
  });

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  );
};
